
const stripe = require("../config/stripe.config");
const { InternalServerError } = require("../helpers/error.helper");
const calculateOrderAmount = require("../utils/calculateOrderAmount.util");

exports.generateClientSecret = async (items) => {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "nzd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return paymentIntent.client_secret;
  } catch (error) {
    throw new InternalServerError("Unable to create payment intent");
  }
};
