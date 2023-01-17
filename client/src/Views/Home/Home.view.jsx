import React from "react";
import BrandsPreview from "../../Components/BrandsPreview/BrandsPreview.component";
import CategoryList from "../../Components/CategoryList/CategoryList.component";
import HeroBanner from "../../Components/HeroBanner/HeroBanner.component";
import bgImg from "../../assets/images/banner.png";
import About from "../../Components/About/About.component";

const Home = () => {
  return (
    <>
      <HeroBanner
        bgImg={bgImg}
        title="Welcome to our store"
        subtitle="Discover the best New Zealand's health supplements"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsam accusamus totam ut temporibus. Dolores magni explicabo dolor officiis provident error, reiciendis molestiae quidem delectus, eveniet natus ullam deserunt vitae?"
      />
      <About />
      <CategoryList />
      <BrandsPreview />
    </>
  );
};

export default Home;
