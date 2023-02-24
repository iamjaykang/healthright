import React from "react";
import BrandsPreviewItem from "./brandsPreviewItem/BrandsPreviewItem.component";
import { useSelector } from "react-redux";
import { selectVendorsMap } from "../../stores/products/product.selector";

const BrandsPreview = () => {

  const vendorsMap = useSelector(selectVendorsMap);

  return (
      <>
      <div className="app__preview-list--brands"></div>
      {vendorsMap &&
        Object.keys(vendorsMap).map((vendor) => {
          const products = vendorsMap[vendor];
          return (
            <BrandsPreviewItem key={vendor} vendor={vendor} products={products} />
          );
        })}
        </>
  );
};

export default BrandsPreview;
