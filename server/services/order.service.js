const { shopOrderDetails } = require("../config/constants.config");
const {
  NotFoundError,
  InternalServerError,
} = require("../helpers/error.helper");
const db = require("../models");
const ShopOrder = db.shopOrders;
const ShippingMethod = db.shippingMethods;
const Address = db.addresses;
const User = db.users;
const OrderStatus = db.orderStatuses;
const OrderLine = db.orderLines;

exports.getAllOrders = async () => {
  try {
    const shopOrders = await ShopOrder.findAll({
      ...shopOrderDetails(
        User,
        Address,
        OrderStatus,
        ShippingMethod,
        OrderLine
      ),
    });
    if (!shopOrders) throw new NotFoundError("Failed to retrieve orders");
    return shopOrders;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};
