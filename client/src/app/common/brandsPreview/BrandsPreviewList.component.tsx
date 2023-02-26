import React from "react";
import BrandsPreviewItem from "./brandsPreviewItem/BrandsPreviewItem.component";
import { useSelector } from "react-redux";
import { selectVendorsMap } from "../../stores/products/product.selector";
import { VendorMap } from "../../models/product.model";

const BrandsPreview = () => {

  const vendorsMap = useSelector(selectVendorsMap) as VendorMap;

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
