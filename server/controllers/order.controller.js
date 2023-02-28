const { getAllOrders } = require("../services/order.service");

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
