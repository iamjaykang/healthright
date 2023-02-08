import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard.component";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./BrandsPreviewItem.css";
import ProductCarousel from "../productCarousel/ProductCarousel.component";
import { useScreenWidth } from "../../app/utils/screenWidth/screenWidth.util";

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
    <div className="brand-preview-item">
      <h2>
        <Link to={`/brands/${vendor}`}>
          <span className="title">{vendor.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
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
