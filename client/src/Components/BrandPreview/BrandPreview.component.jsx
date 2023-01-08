import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import './BrandPreview.css';

const BrandPreview = ({ title, products }) => {
  return (
    <div className="brand-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
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

export default BrandPreview;
