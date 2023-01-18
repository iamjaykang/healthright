import React from "react";
import BrandsPreviewItem from "../BrandsPreviewItem/BrandsPreviewItem.component";
import "./BrandsPreview.css";
import { useSelector } from "react-redux";
import { selectBrandsMap } from "../../stores/brands/brand.selector";

const BrandsPreview = () => {

  const brandsMap = useSelector(selectBrandsMap);

  return (
    <div className="brands-preview-container">
      {brandsMap &&
        Object.keys(brandsMap).map((title) => {
          const products = brandsMap[title];
          return (
            <BrandsPreviewItem key={title} title={title} products={products} />
          );
        })}
    </div>
  );
};

export default BrandsPreview;
