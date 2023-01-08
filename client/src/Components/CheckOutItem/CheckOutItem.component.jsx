import React, { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";
import "./CheckOutItem.css";

const CheckOutItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useContext(CartContext);

  const handleIncrementClick = (itemId) => {
    updateItemQuantity(itemId, "increment");
  };

  const handleDecrementClick = (itemId) => {
    updateItemQuantity(itemId, "decrement");
  };
  return (
    <>
      <div className="checkout-item-container">
        <div className="img-container">
          <img src={item.imgUrl} alt={`${item.name}`} />
        </div>
        <span className="name">{item.name}</span>

        <div className="quantity">
          <div onClick={() => handleDecrementClick(item.id)}>-</div>
          <span className="value">{item.quantity}</span>
          <div onClick={() => handleIncrementClick(item.id)}>+</div>
        </div>

        <span className="price">{item.price}</span>

        <div onClick={() => removeItem(item.id)} className="remove-btn">
          X
        </div>
      </div>
    </>
  );
};

export default CheckOutItem;
