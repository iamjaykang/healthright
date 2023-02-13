import React from "react";
import brands from "../../../assets/data/brands.json";
import CategoryItem from "./categoryItem/CategoryItem.component";
import "./CategoryList.css";

const CategoryList = () => {
  return (
    <div className="categories-container">
      <h2 className="title">FEATURED BRANDS</h2>
      <ul className="categories-wrapper">
        {brands.map((brand) => (
          <CategoryItem key={brand.id} category={brand} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
