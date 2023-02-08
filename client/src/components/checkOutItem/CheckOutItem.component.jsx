import React from "react";

import { updateItemQuantity, removeItem } from "../../app/stores/cart/cart.action";

import { useDispatch, useSelector } from "react-redux";

import "./CheckOutItem.css";
import { selectCartItems } from "../../app/stores/cart/cart.selector";

const CheckOutItem = ({ item }) => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const handleIncrementClick = (itemId) => {
    dispatch(updateItemQuantity(cartItems, itemId, "increment"));
  };

  const handleDecrementClick = (itemId) => {
    dispatch(updateItemQuantity(cartItems, itemId, "decrement"));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(cartItems, itemId));
  };
  return (
    <div className="checkout-item">
      <div className="product">
        <div className="img-container">
          <img src={item.product_image} alt={item.name} />
        </div>
        <div className="name">
          <span>{item.name}</span>
        </div>
      </div>
      <div className="price">${item.price}</div>
      <div className="quantity-container">
        <div className="quantity">
          <div onClick={() => handleDecrementClick(item.id)}>-</div>
          <span className="value">{item.quantity}</span>
          <div onClick={() => handleIncrementClick(item.id)}>+</div>
        </div>
        <div className="remove">
          <div onClick={() => handleRemoveItem(item.id)}>Remove</div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
