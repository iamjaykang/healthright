import React from "react";
import PaymentForm from "../../Components/PaymentForm/PaymentForm.component";
import './Payment.css'

const Payment = () => {
  return (
    <div className="payment-form-container">
      <h2>Payment</h2>
      <PaymentForm />
      <p style={{ color: "red", textAlign: "center" }}>
        *Testing only, use Card number: 4242 4242 4242 4242
      </p>
    </div>
  );
};

export default Payment;
