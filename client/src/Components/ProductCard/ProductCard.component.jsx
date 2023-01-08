import React, { useContext } from "react";
import Button from "../../App/Common/Button/Button.common";
import { CartContext } from "../../Contexts/Cart.context";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imgUrl } = product;

  const addProductToCart = () => addItemToCart(product);
  
  return (
    <div className="product-card-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="card-info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
