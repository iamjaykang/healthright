import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BrandsPreviewItem.css";
import { selectBrandsIsLoading } from "../../stores/brands/brand.selector";
import Spinner from "../../App/Common/Spinner/Spinner.common";

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
