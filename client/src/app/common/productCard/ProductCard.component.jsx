import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/Button.common";
import { addItemToCart } from "../../stores/cart/cart.action";
import { selectCartItems } from "../../stores/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, productImage } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="app__product-card-container">
      <div className="app__card-img-container">
      <img src={productImage} alt={`${name}`} />
      </div>
      <div className="app__card-info">
        <span className="app__card-name">{name}</span>
        <span className="app__card-price">${price}</span>
      </div>
      <Button btnType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
