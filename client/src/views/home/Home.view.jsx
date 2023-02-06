import React from "react";
import BrandsPreview from "../../components/brandsPreview/BrandsPreview.component";
import CategoryList from "../../components/categoryList/CategoryList.component";
import HeroBanner from "../../components/heroBanner/HeroBanner.component";
import "./Home.css";
import desktopBgImg from "../../assets/images/banner-desktop.png";
import mobileBgImg from "../../assets/images/banner.png";
import About from "../../components/about/About.component";
import MobileHeroBanner from "../../components/mobileHeroBanner/MobileHeroBanner.component";

const Home = () => {
  return (
    <>
      <HeroBanner
        bgImg={desktopBgImg}
        title="Welcome to Healthright"
        subtitle="Discover the best New Zealand's health supplements"
        description="Welcome to Healthright, your one-stop shop for premium New Zealand health supplements. Based in New Zealand, we are dedicated to providing our customers with the best products to support their wellness journey. Shop with us and experience the benefits of locally sourced and high-quality supplements. Get started on the path to better health today!"
      />
      <MobileHeroBanner bgImg={mobileBgImg} />
      <About />
      <CategoryList />
      <BrandsPreview />
    </>
  );
};

export default Home;
