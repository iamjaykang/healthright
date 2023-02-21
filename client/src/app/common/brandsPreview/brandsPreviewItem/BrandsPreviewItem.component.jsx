import React, { useEffect, useState } from "react";
import ProductCard from "../../productCard/ProductCard.component";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ProductCarousel from "../../productCarousel/ProductCarousel.common";
import { useScreenWidth } from "../../../utils/screenWidth/screenWidth.util";

const BrandsPreviewItem = ({ vendor, products }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }
  }, [screenWidth]);

  return (
    <div className="app__brands-preview-item">
      <div className="app__brands-preview-item-title">
        <Link to={`/brands/${vendor}`}>
          <h2>{vendor.toUpperCase()}</h2>
        </Link>
        </div>
      <div className="app__brands-preview-item-content">
        <ProductCarousel slidesPerView={slidesPerView}>
          {products.map((product) => (
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
