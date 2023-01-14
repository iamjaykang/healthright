import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.component";
import { useSelector } from "react-redux";
import { selectBrandsMap } from "../../stores/brands/brand.selector";

const BrandPreview = () => {
  const { brand } = useParams();
  console.log('render/re-rendering category component')
  const brandsMap = useSelector(selectBrandsMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('effect fired calling setProducts')
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

export default BrandPreview;
