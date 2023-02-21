const paymentService = require("../services/payment.service");

exports.createPaymentIntent = async (req, res, next) => {
  try {
    const items = req.body;

    const clientSecret = await paymentService.generateClientSecret(items);

    res.status(200).send({
      data: clientSecret,
      success: true,
      message: "Payment intent created successfully",
    });
  } catch (error) {
    next(error);
  }
};
