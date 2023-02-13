import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../common/button/Button.common";
import {
  selectCartItems,
} from "../../../stores/cart/cart.selector";
import CartItem from "./cartItem/CartItem.layout";
import "./CartDropdown.css";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length === 0 && (
        <div className="empty-message">Your Cart is Empty!</div>
      )}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="checkout">
        <Button>Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
