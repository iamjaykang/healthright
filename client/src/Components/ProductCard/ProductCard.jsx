import React from "react";
import Button from "../../App/Common/Button/Button";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="card-info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
