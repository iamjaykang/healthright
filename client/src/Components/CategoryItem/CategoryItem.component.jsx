import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <li className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </li>
  );
};

export default CategoryItem;
