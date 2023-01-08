import React, { useContext, Fragment } from "react";
import { BrandsContext } from "../../Contexts/Brands.context";
import BrandPreview from "../BrandPreview/BrandPreview.component";
import "./Shop.css";

const Shop = () => {
  const { brandsMap } = useContext(BrandsContext);

  return (
    <div className="shop-container">
      {brandsMap &&
        Object.keys(brandsMap).map((title) => {
          const products = brandsMap[title];
          return <BrandPreview key={title} title={title} products={products} />;
        })}
    </div>
  );
};

export default Shop;
