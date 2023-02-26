import React, { FC, ReactNode } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface ProductCarouselProps {
  slidesPerView: number;
  children: ReactNode;
}

const ProductCarousel: FC<ProductCarouselProps> = ({
  children,
  slidesPerView,
}) => {
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
