import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.component";
import { useSelector } from "react-redux";
import { selectBrandsMap } from "../../stores/brands/brand.selector";
import "./BrandPreview.css";

const BrandPreview = () => {
  const { brand } = useParams();
  const brandsMap = useSelector(selectBrandsMap);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!brandsMap[brand]) {
      navigate("/not-found");
    } else {
      setProducts(brandsMap[brand]);
    }
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
