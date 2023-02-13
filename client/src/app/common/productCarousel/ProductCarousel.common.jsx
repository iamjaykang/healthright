import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductCarousel.css";

const ProductCarousel = ({ children, slidesPerView }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      draggable
      navigation={false}
      pagination={{ clickable: true }}
      preventInteractionOnTransition={false}
    >
      {children}
    </Swiper>
  );
};

export default ProductCarousel;
