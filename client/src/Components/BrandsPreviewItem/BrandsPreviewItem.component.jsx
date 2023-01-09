import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import { Link } from "react-router-dom";
import "./BrandsPreviewItem.css";

const BrandsPreviewItem = ({ title, products }) => {
  return (
    <div className="brand-preview-item">
      <h2>
        <Link to={`/brands/${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BrandsPreviewItem;
