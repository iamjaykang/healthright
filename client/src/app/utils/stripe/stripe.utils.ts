import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error('Stripe publishable key is undefined');
}

export const stripePromise = loadStripe(stripePublishableKey);