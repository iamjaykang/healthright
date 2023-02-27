import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../common/button/Button.common";
import { setIsCartOpen } from "../../../stores/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../../stores/cart/cart.selector";
import CartFrequentlyBought from "./cartFrequentlyBought/CartFrequentlyBought.layout";
import CartItem from "./cartItem/CartItem.layout";

const CartSidepanel = () => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);

  const handleCartClose = () => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
    }
  };

  return (
    <>
      <div
        className={`app__overlay${isCartOpen ? " show" : ""}`}
        onClick={handleCartClose}
      />
      <div
        className={`app__cart-sidepanel-container shadow-sm${
          isCartOpen ? " show" : ""
        }`}
      >
        <div className="app__cart-items-container">
          {cartItems.length === 0 && (
            <div className="empty-message">Your Cart is Empty!</div>
          )}
          <div className="app__cart-item-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
        </div>
          <Link to="checkout">
            <Button onClick={handleCartClose}>Go to Cart</Button>
          </Link>
        <CartFrequentlyBought />
      </div>
    </>
  );
};

export default CartSidepanel;
