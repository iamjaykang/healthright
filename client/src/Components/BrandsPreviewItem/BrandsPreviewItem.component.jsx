import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./BrandsPreviewItem.css";
import ProductCarousel from "../ProductCarousel/ProductCarousel.component";

const BrandsPreviewItem = ({ title, products }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    //Check the screen width on page load
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }

    //Check the screen width on window resize
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div className="brand-preview-item">
      <h2>
        <Link to={`/brands/${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        <ProductCarousel slidesPerView={slidesPerView}>
          {products
            .map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
            ))}
        </ProductCarousel>
      </div>
    </div>
  );
};

export default BrandsPreviewItem;
