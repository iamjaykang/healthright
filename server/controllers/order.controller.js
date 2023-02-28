const { getAllOrders, getOrderById, createOrder } = require("../services/order.service");

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.status(200).send({
      data: orders,
      success: true,
      message: "Retreived orders successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await getOrderById(orderId);
    res.status(200).send({
      data: order,
      success: true,
      message: "Retreived order successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewOrder = async (req, res, next) => {
  try {
    const newOrder = req.body;
    const createdOrder = await createOrder(newOrder);
    res.status(201).send({
      data: createdOrder,
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    next(error);
  }
};
