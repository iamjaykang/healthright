import React from "react";
import BrandsPreview from "../../Components/BrandsPreview/BrandsPreview.component";
import CategoryList from "../../Components/CategoryList/CategoryList.component";

const Home = () => {
  return (
    <>
      <CategoryList />
      <BrandsPreview />
    </>
  );
};

export default Home;
