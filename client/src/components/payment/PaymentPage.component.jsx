import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentForm from "./paymentForm/PaymentForm.component";
import { selectCartItems } from "../../app/stores/cart/cart.selector";
import { stripePromise } from "../../app/utils/stripe/stripe.utils";
import { setClientSecretLoading } from "../../app/stores/payments/payment.action";
import {
  selectClientSecret,
  selectPaymentsIsLoading,
  selectPaymentsIsSuccess,
} from "../../app/stores/payments/payment.selector";
import Spinner from "../../app/common/spinner/Spinner.common";

const PaymentPage = () => {
  const clientSecret = useSelector(selectClientSecret);

  const paymentIntentIsLoading = useSelector(selectPaymentsIsLoading);

  const paymentIntentIsSuccess = useSelector(selectPaymentsIsSuccess);

  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);

  useEffect(() => {
    if (items) {
      dispatch(setClientSecretLoading(items));
    }
  }, [items, dispatch]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  if (paymentIntentIsLoading && !paymentIntentIsSuccess) {
    return <Spinner />;
  }

  return (
    <div className="app__payment-form-container">
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
