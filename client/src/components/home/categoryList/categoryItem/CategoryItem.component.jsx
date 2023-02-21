import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <li className="app__category-list-item">
      <div
        className="app__category-background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
          backgroundSize:
            category.title === "Nzpurehealth" || category.title === "kuku"
              ? "70%"
              : "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Link to={category.to} className="app__category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Link>
    </li>
  );
};

export default CategoryItem;
