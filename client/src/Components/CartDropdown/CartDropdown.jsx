import React, { useContext } from "react";
import Button from "../../App/Common/Button/Button";
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
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
