import React from "react";
import {
  updateItemQuantity,
  removeItem,
} from "../../../app/stores/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../app/stores/cart/cart.selector";
import { CartItemData } from "../../../app/models/product.model";

const CheckOutItem = ({ item }: { item: CartItemData }) => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const handleIncrementClick = (itemId: number) => {
    dispatch(updateItemQuantity(cartItems, itemId, "increment"));
  };

  const handleDecrementClick = (itemId: number) => {
    dispatch(updateItemQuantity(cartItems, itemId, "decrement"));
  };

  const handleRemoveItem = (itemId: number) => {
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
          <button onClick={() => item.id && handleDecrementClick(item.id)}>
            -
          </button>
          <span className="app__product--value">{item.quantity}</span>
          <button onClick={() => item.id && handleIncrementClick(item.id)}>
            +
          </button>
        </div>
        <div className="app__product--remove">
          <button onClick={() => item.id && handleRemoveItem(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
