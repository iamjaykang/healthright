import React from "react";
import BrandsPreview from "../../Components/BrandsPreview/BrandsPreview.component";
import CategoryList from "../../Components/CategoryList/CategoryList.component";
import HeroBanner from "../../Components/HeroBanner/HeroBanner.component";
import "./Home.css";
import desktopBgImg from "../../assets/images/banner-desktop.png";
import mobileBgImg from "../../assets/images/banner.png";
import About from "../../Components/About/About.component";
import MobileHeroBanner from "../../Components/MobileHeroBanner/MobileHeroBanner.component";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel.component";

const Home = () => {
  return (
    <>
      <HeroBanner
        bgImg={desktopBgImg}
        title="Welcome to Healthright"
        subtitle="Discover the best New Zealand's health supplements"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsam accusamus totam ut temporibus. Dolores magni explicabo dolor officiis provident error, reiciendis molestiae quidem delectus, eveniet natus ullam deserunt vitae?"
      />
      <MobileHeroBanner bgImg={mobileBgImg} />
      <About />
      <CategoryList />
      {/* <ProductCarousel /> */}
      <BrandsPreview />
    </>
  );
};

export default Home;
