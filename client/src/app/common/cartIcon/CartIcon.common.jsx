import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../stores/cart/cart.selector";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { setIsCartOpen } from "../../stores/cart/cart.action";

const CartIcon = ({ isMobileMenu }) => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
    if (!isMobileMenu) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
  };

  return (
    <div className="app__cart-icon-container" onClick={toggleIsCartOpen}>
      <HiOutlineShoppingBag className="app__shopping-icon" />
      <span className="app__cart-item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
