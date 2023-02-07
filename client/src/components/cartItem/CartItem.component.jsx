import React from "react";
import './CartItem.css';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, product_image } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={product_image} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
