import React from "react";
import brands from "../../../assets/data/brands.json";
import CategoryItem from "./categoryItem/CategoryItem.component";

const CategoryList = () => {
  return (
    <div className="app__categories-section">
      <h2 className="app__content-title">FEATURED BRANDS</h2>
      <ul className="app__categories-list">
        {brands.map((brand) => (
          <CategoryItem key={brand.id} category={brand} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
