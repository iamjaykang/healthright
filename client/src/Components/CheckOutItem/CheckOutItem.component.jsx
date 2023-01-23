import React from "react";

import { updateItemQuantity, removeItem } from "../../stores/cart/cart.action";

import { useDispatch, useSelector } from "react-redux";

import "./CheckOutItem.css";
import { selectCartItems } from "../../stores/cart/cart.selector";

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
    <tr className="checkout-item">
      <td className="product">
        <div className="img-container">
          <img src={item.imgUrl} alt={item.name} />
        </div>
        <div className="name">
          <span>{item.name}</span>
        </div>
      </td>
      <td className="quantity">
        <div onClick={() => handleDecrementClick(item.id)}>-</div>
        <span className="value">{item.quantity}</span>
        <div onClick={() => handleIncrementClick(item.id)}>+</div>
      </td>
      <td className="price">${item.price}</td>
      <td className="remove">
        <div onClick={() => handleRemoveItem(item.id)}>Remove</div>
      </td>
    </tr>
  );
};

export default CheckOutItem;
