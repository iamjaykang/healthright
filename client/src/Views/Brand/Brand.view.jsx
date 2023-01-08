import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard.component";
import { BrandsContext } from "../../Contexts/Brands.context";
import "./Brand.css";

const Brand = () => {
  const { brand } = useParams();
  const { brandsMap } = useContext(BrandsContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(brandsMap[brand]);
  }, [brand, brandsMap]);

  return (
    <>
      <h2 className="brand-title">{brand.toUpperCase()}</h2>
      <div className="brand-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Brand;
