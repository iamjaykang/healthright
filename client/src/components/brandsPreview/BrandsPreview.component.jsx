import React from "react";
import BrandsPreviewItem from "../brandsPreviewItem/BrandsPreviewItem.component";
import "./BrandsPreview.css";
import { useSelector } from "react-redux";
import { selectVendorsMap } from "../../app/stores/products/product.selector";

const BrandsPreview = () => {

  const vendorsMap = useSelector(selectVendorsMap);

  return (
    <div className="brands-preview-container">
      {vendorsMap &&
        Object.keys(vendorsMap).map((vendor) => {
          const products = vendorsMap[vendor];
          return (
            <BrandsPreviewItem key={vendor} vendor={vendor} products={products} />
          );
        })}
    </div>
  );
};

export default BrandsPreview;
