const { shopOrderDetails } = require("../config/constants.config");
const {
  NotFoundError,
  InternalServerError,
  BadRequestError,
} = require("../helpers/error.helper");
const db = require("../models");
const ShopOrder = db.shopOrders;
const ShippingMethod = db.shippingMethods;
const UserAddress = db.userAddresses;
const Address = db.addresses;
const User = db.users;
const OrderStatus = db.orderStatuses;
const OrderLine = db.orderLines;
const Product = db.products;
const Country = db.countries;

exports.getAllShopOrders = async () => {
  try {
    const shopOrders = await ShopOrder.findAll({
      ...shopOrderDetails(
        User,
        Address,
        OrderStatus,
        ShippingMethod,
        OrderLine,
        Product,
        Country
      ),
    });
    if (!shopOrders) throw new NotFoundError("Failed to retrieve orders");
    return shopOrders;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.getShopOrderById = async (orderId) => {
  try {
    const order = await ShopOrder.findByPk(orderId, {
      ...shopOrderDetails(
        User,
        Address,
        OrderStatus,
        ShippingMethod,
        OrderLine,
        Product,
        Country
      ),
    });
    if (!order) throw new NotFoundError(`Order with id ${orderId} not found`);
    return order;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.createShopOrder = async (orderData) => {
  const {
    emailAddress,
    firstName,
    lastName,
    unitNumber,
    streetNumber,
    addressLine1,
    addressLine2,
    city,
    region,
    postalCode,
    countryId,
    shippingMethodId,
    orderLines,
  } = orderData;

  try {
    // Find the user record or create a new one if it does not exist
    let user = await User.findOne({ where: { emailAddress } });
    if (!user) {
      user = await User.create({ emailAddress, firstName, lastName });
    }

    // Find the shipping method record
    const shippingMethod = await ShippingMethod.findByPk(shippingMethodId);
    if (!shippingMethod) {
      throw new BadRequestError(
        `Shipping method with id ${shippingMethodId} does not exist.`
      );
    }

    // Find the shipping address record or create a new one if it does not exist
    const shippingAddressData = {
      unitNumber,
      streetNumber,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      countryId,
    };
    let address = await Address.findOne({
      where: {
        ...shippingAddressData,
      },
    });
    if (!address) {
      address = await Address.create(shippingAddressData);
    }

    // Create or update the user address record
    let userAddress = await UserAddress.findOne({
      where: {
        userId: user.id,
        addressId: address.id,
      },
    });
    if (!userAddress) {
      const userAddresses = await UserAddress.findAll({
        where: {
          userId: user.id,
        },
      });
      const isDefault = userAddresses.length === 0;
      userAddress = await UserAddress.create({
        userId: user.id,
        addressId: address.id,
        isDefault,
      });
    } else {
      const userAddresses = await UserAddress.findAll({
        where: {
          userId: user.id,
        },
      });
      const isDefault = userAddresses.length === 1 || userAddress.isDefault;
      await userAddress.update({ isDefault });
    }

    // Calculate the order total
    let orderTotal = 0;
    for (const orderLine of orderLines) {
      const { productItemId, qty } = orderLine;
      if (!productItemId) {
        throw new BadRequestError(`Invalid product item ID: ${productItemId}`);
      }
      const productItem = await Product.findByPk(productItemId);
      if (!productItem) {
        throw new BadRequestError(
          `Product item with id ${productItemId} does not exist.`
        );
      }
      orderTotal += parseFloat(productItem.price) * qty;
    }

    // Add the shipping method price to the order total
    orderTotal += parseFloat(shippingMethod.price);

    // Update the order status
    const orderStatus = await OrderStatus.findOne({
      where: { status: "Processing" },
    });
    if (!orderStatus) {
      throw new BadRequestError(`Order status of processing does not exist.`);
    }

    // Create the order record
    const order = await ShopOrder.create({
      userId: user.id,
      shippingAddressId: address.id,
      shippingMethodId,
      orderStatusId: orderStatus.id,
      orderTotal: orderTotal.toFixed(2),
    });

    // Create the order line records
    for (const orderLine of orderLines) {
      const { productItemId, qty } = orderLine;
      const productItem = await Product.findByPk(productItemId);
      if (!productItem) {
        throw new BadRequestError(
          `Product item with id ${productItemId} does not exist.`
        );
      }

      // Update the qtyInStock of the Product
      const newQtyInStock = productItem.qtyInStock - qty;
      await productItem.update({ qtyInStock: newQtyInStock });

      const orderLineData = {
        productItemId,
        orderId: order.id,
        qty,
        price: productItem.price,
      };
      await OrderLine.create(orderLineData);
    }

    // Return the newly created order
    return await ShopOrder.findByPk(order.id, {
      ...shopOrderDetails(
        User,
        Address,
        OrderStatus,
        ShippingMethod,
        OrderLine,
        Product,
        Country
      ),
    });
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.updateShopOrderById = async (shopOrderId, newOrderData) => {
  const {
    emailAddress,
    firstName,
    lastName,
    unitNumber,
    streetNumber,
    addressLine1,
    addressLine2,
    city,
    region,
    postalCode,
    countryId,
    shippingMethodId,
    orderStatusId,
    orderLines,
  } = newOrderData;
  try {
    // Find the shop order by ID and include related models
    const shopOrder = await ShopOrder.findByPk(shopOrderId, {
      include: [
        {
          model: User,
        },
        {
          model: Address,
          as: "shippingAddress",
          include: [{ model: Country }],
        },
        {
          model: OrderStatus,
        },
        {
          model: ShippingMethod,
        },
        {
          model: OrderLine,
          include: [{ model: Product, as: "orderItem" }],
        },
      ],
    });

    if (!shopOrder) {
      throw new NotFoundError(`Shop order with the id not found`);
    }

    // Get the user from the shop order
    const user = shopOrder.user;

    // Check if the email address in the new order data is different from the user's current email address
    if (emailAddress && emailAddress !== user.emailAddress) {
      // Check if the new email address is already in use by another user
      const existingUser = await User.findOne({ where: { emailAddress } });
      if (existingUser) {
        throw new BadRequestError(
          `Email address '${emailAddress}' is already in use.`
        );
      }
    }

    // Update the user's details
    await User.update(
      { firstName, lastName, emailAddress },
      { where: { id: user.id } }
    );

    // Get the shipping address from the shop order
    const shippingAddress = shopOrder.shippingAddress;

    // Get the shipping address country from the new order data
    const shippingAddressCountry = await Country.findByPk(countryId);
    if (!shippingAddressCountry) {
      throw new BadRequestError(`Country with id ${countryId} does not exist`);
    }

    // Update the shipping address with the new data
    await Address.update(
      {
        unitNumber,
        streetNumber,
        addressLine1,
        addressLine2,
        city,
        region,
        postalCode,
        countryId,
      },
      { where: { id: shippingAddress.id } }
    );

    // Get the order status from the new order data
    const orderStatus = await OrderStatus.findByPk(orderStatusId);
    if (!orderStatus) {
      throw new BadRequestError(
        `Order status with id ${orderStatusId} does not exist`
      );
    }
    shopOrder.orderStatusId = orderStatus.id;

    // Get the order status from the new order data
    const shippingMethod = await ShippingMethod.findByPk(shippingMethodId);
    if (!shippingMethod) {
      throw new BadRequestError(
        `Order status with id ${shippingMethodId} does not exist`
      );
    }
    shopOrder.shippingMethodId = shippingMethod.id;

    // Update the order lines for the shop order
    await updateOrderLinesForShopOrder(shopOrder, orderLines);

    // Calculate the order total
    const updatedOrderLines = await OrderLine.findAll({
      where: { orderId: shopOrderId },
      include: [{ model: Product, as: "orderItem" }],
    });

    let orderTotal = 0;

    updatedOrderLines.forEach((orderLine) => {
      const { qty, orderItem } = orderLine;
      const lineTotal = parseFloat(orderItem.price) * qty;
      orderTotal += lineTotal;
    });

    shopOrder.orderTotal = orderTotal += parseFloat(shippingMethod.price);

    await shopOrder.save();
    return shopOrder;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

const updateOrderLinesForShopOrder = async (shopOrder, orderLines) => {
  // Fetch the existing order lines for the given orderId
  const existingOrderLines = await OrderLine.findAll({
    where: { orderId: shopOrder.id },
    include: [{ model: Product, as: "orderItem" }],
  });

  // Iterate over the new order lines and update or insert them
  for (const orderLine of orderLines) {
    const { id, productItemId, qty } = orderLine;
    if (!productItemId) {
      throw new BadRequestError(`Invalid product item ID: ${productItemId}`);
    }
    const productItem = await Product.findByPk(productItemId);
    if (!productItem) {
      throw new BadRequestError(
        `Product item with id ${productItemId} does not exist.`
      );
    }

    // Check if the order line already exists
    const existingOrderLine = existingOrderLines.find(
      (orderLine) => orderLine.id === id
    );

    // Update or insert the order line data
    const orderLineData = {
      orderId: shopOrder.id,
      productItemId: productItem.id,
      qty: qty,
      price: productItem.price,
    };

    if (existingOrderLine) {
      // If the order line already exists, update the quantity and product
      const { qty: existingQty, productItemId: existingProductItemId } =
        existingOrderLine;

      if (existingProductItemId === productItemId) {
        // Update the existing order line
        await existingOrderLine.update({
          qty,
          price: productItem.price,
        });

        // Update the quantity in stock for the product item
        const qtyInStockDiff = existingQty - qty;
        const newQtyInStock = productItem.qtyInStock + qtyInStockDiff;
        await productItem.update({
          qtyInStock: newQtyInStock,
        });
      } else {
        // Update the existing order line and the quantity in stock for the products
        await existingOrderLine.update({
          productItemId,
          qty,
          price: productItem.price,
        });

        const existingProductItem = await Product.findByPk(
          existingProductItemId
        );
        const existingQtyInStock = existingProductItem.qtyInStock + existingQty;
        await existingProductItem.update({
          qtyInStock: existingQtyInStock,
        });

        const newQtyInStock = productItem.qtyInStock - qty;
        await productItem.update({
          qtyInStock: newQtyInStock,
        });
      }
    } else {
      // If the order line doesn't exist, insert a new one
      await OrderLine.create(orderLineData);

      // Update the quantity in stock for the product item
      const newQtyInStock = productItem.qtyInStock - qty;
      await productItem.update({
        qtyInStock: newQtyInStock,
      });
    }
  }

  // Remove any order lines that were not included in the new order data
  const existingOrderLineIds = existingOrderLines.map((ol) => ol.id);
  const updatedOrderLineIds = orderLines
    .filter((ol) => ol.id)
    .map((ol) => ol.id);
  const orderLinesToDelete = existingOrderLines.filter(
    (ol) => !updatedOrderLineIds.includes(ol.id)
  );
  if (orderLinesToDelete.length > 0) {
    await OrderLine.destroy({ where: { id: existingOrderLineIds } });

    // Add back the quantity to the corresponding product items
    for (const orderLine of orderLinesToDelete) {
      const { productItemId, qty } = orderLine;
      const productItem = await Product.findByPk(productItemId);
      const newQtyInStock = productItem.qtyInStock + qty;
      await productItem.update({ qtyInStock: newQtyInStock });
    }
  }
};

exports.deleteShopOrderById = async (shopOrderId) => {
  try {
    const shopOrder = await ShopOrder.findByPk(shopOrderId, {
      include: [
        {
          model: OrderLine,
          include: [{ model: Product, as: "orderItem" }],
        },
      ],
    });

    if (!shopOrder) {
      throw new NotFoundError(`Shop order with the id not found`);
    }

    // Delete the order lines and update qty in stock for each product item
    await Promise.all(
      shopOrder.orderLines.map(async (orderLine) => {
        const productItem = orderLine.orderItem;
        productItem.qtyInStock += orderLine.qty;
        await productItem.save();
        await orderLine.destroy();
      })
    );

    // Delete the shop order
    await shopOrder.destroy();
  } catch (error) {
    throw error;
  }
};
