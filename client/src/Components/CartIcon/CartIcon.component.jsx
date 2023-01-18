import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./CartIcon.css";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../stores/cart/cart.selector";
import { setIsCartOpen } from "../../stores/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".cart-icon-container")) {
        dispatch(setIsCartOpen(false));
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
