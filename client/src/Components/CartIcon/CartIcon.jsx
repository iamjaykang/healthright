import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../Contexts/Cart";
import "./CartIcon.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
