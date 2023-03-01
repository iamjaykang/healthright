const {
  getAllShopOrders,
  getShopOrderById,
  createShopOrder,
  updateShopOrderById,
} = require("../services/order.service");

exports.getShopOrders = async (req, res, next) => {
  try {
    const shopOrders = await getAllShopOrders();
    res.status(200).send({
      data: shopOrders,
      success: true,
      message: "Retreived orders successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getShopOrder = async (req, res, next) => {
  try {
    const { shopOrderId } = req.params;
    const shopOrder = await getShopOrderById(shopOrderId);
    res.status(200).send({
      data: shopOrder,
      success: true,
      message: "Retreived order successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewShopOrder = async (req, res, next) => {
  try {
    const newShopOrder = req.body;
    const createdShopOrder = await createShopOrder(newShopOrder);
    res.status(201).send({
      data: createdShopOrder,
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateExistingShopOrder = async (req, res, next) => {
  try {
    console.log(req.params);
    const { shopOrderId } = req.params;
    const newShopOrderData = req.body;
    const updatedShopOrder = await updateShopOrderById(
      shopOrderId,
      newShopOrderData
    );
    res.status(200).send({
      data: updatedShopOrder,
      success: true,
      message: "Order updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
