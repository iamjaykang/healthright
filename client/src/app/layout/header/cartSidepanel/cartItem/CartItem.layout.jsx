import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, productImage } = cartItem;
  return (
    <div className="app__cart-item-container">
      <img src={productImage} alt={`${name}`} />
      <div className="app__cart-item-details">
        <span className="app__cart-item-name">{name}</span>
        <span className="app__cart-item-price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
