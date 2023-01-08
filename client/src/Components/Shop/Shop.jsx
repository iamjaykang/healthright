import React, { useContext, Fragment } from "react";
import { BrandsContext } from "../../Contexts/Brands";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
  const { brandsMap } = useContext(BrandsContext);

  return (
    <Fragment>
      {brandsMap &&
        Object.keys(brandsMap).map((title) => (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {brandsMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        ))}
    </Fragment>
  );
};

export default Shop;
