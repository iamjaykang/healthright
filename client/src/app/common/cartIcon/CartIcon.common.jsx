import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-bag.svg";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../stores/cart/cart.selector";
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartOpen && !event.target.closest(".app__cart-icon-container")) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch, isCartOpen]);
  return (
    <div
      className="app__cart-icon-container"
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="app__shopping-icon" />
      <span className="app__cart-item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
