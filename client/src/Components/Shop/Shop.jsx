import React, { useContext } from "react";
import { ProductsContext } from "../../Contexts/Products";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
