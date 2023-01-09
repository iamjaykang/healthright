import React, { useContext } from "react";
import { BrandsContext } from "../../Contexts/Brands.context";
import BrandsPreviewItem from "../BrandsPreviewItem/BrandsPreviewItem.component";
import "./BrandsPreview.css";

const BrandsPreview = () => {
  const { brandsMap } = useContext(BrandsContext);

  return (
    <>
      {brandsMap &&
        Object.keys(brandsMap).map((title) => {
          const products = brandsMap[title];
          return <BrandsPreviewItem key={title} title={title} products={products} />;
        })}
    </>
  );
};

export default BrandsPreview;
