import React from "react";
import Button from "../../App/Common/Button/Button";
import "./CartDropdown.css";

const CartDropdown = () => {
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
