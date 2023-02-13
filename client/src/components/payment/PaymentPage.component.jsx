import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import agent from "../../app/api/agent";
import PaymentForm from "./paymentForm/PaymentForm.component";
import { selectCartItems } from "../../app/stores/cart/cart.selector";
import { stripePromise } from "../../app/utils/stripe/stripe.utils";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  const Items = useSelector(selectCartItems);

  useEffect(() => {
    if (Items) {
      agent.Payments.create(Items).then((data) =>
        setClientSecret(data.clientSecret)
      );
    }
  }, [Items]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment-form-container">
      <h2>Payment</h2>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
