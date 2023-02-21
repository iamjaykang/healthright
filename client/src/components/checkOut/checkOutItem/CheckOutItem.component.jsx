import React from "react";
import {
  updateItemQuantity,
  removeItem,
} from "../../../app/stores/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../app/stores/cart/cart.selector";

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
    <div className="app__checkout-item">
      <div className="app__product-container">
        <div className="app__product-img-container">
          <img src={item.productImage} alt={item.name} />
        </div>
        <div className="app__product-name">
          <span>{item.name}</span>
        </div>
      </div>
      <div className="app__product-price">${item.price}</div>
      <div className="app__product-quantity-container">
        <div className="app__product--quantity">
          <button onClick={() => handleDecrementClick(item.id)}>-</button>
          <span className="app__product--value">{item.quantity}</span>
          <button onClick={() => handleIncrementClick(item.id)}>+</button>
        </div>
        <div className="app__product--remove">
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
