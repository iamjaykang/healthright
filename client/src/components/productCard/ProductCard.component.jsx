import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../app/common/button/Button.common";
import { addItemToCart } from "../../app/stores/cart/cart.action";
import { selectCartItems } from "../../app/stores/cart/cart.selector";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, productImage } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <div className="card-img-container">
      <img src={productImage} alt={`${name}`} />
      </div>
      <div className="card-info">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button btnType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
