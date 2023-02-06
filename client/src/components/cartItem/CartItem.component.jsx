import React from "react";
import './CartItem.css';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imgUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
