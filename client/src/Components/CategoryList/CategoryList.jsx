import React from "react";
import categories from "../../assets/data/categories.json";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./categoryList.css";

const CategoryList = () => {
  return (
    <ul className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;