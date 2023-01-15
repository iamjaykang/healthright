import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <li className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
          backgroundSize:
            category.title === "Nzpurehealth" || category.title === "kuku"
              ? "70%"
              : "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Link to={category.to} className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Link>
    </li>
  );
};

export default CategoryItem;
