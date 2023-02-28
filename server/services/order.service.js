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

exports.getAllOrders = async () => {
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

exports.getOrderById = async (orderId) => {
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

exports.createOrder = async (orderData) => {
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
