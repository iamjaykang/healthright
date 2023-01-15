import React from "react";
import brands from "../../assets/data/brands.json";
import CategoryItem from "../CategoryItem/CategoryItem.component";
import "./CategoryList.css";

const CategoryList = () => {
  return (
    <>
    <h2 className="title">BRANDS</h2>
    <ul className="categories-container">
      {brands.map((brand) => (
        <CategoryItem key={brand.id} category={brand} />
      ))}
    </ul>
    </>
  );
};

export default CategoryList;