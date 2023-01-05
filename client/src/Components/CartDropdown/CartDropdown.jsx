import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/Cart";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to='check-out'>Go to Checkout</Link>
    </div>
  );
};

export default CartDropdown;
