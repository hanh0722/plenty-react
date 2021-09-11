import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
import classes from "./ListImage.module.scss";
import MagnifyImage from "../MagnifyImage/MagnifyImage";
SwiperCore.use([Navigation, Pagination, Thumbs]);

const ListImage = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        className={`pb-3 ${classes.container}`}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        grabCursor={false}
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item}>
              <MagnifyImage src={item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        className={`${classes["image__content"]} swiper__card`}
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item}>
              <img src={item} alt={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ListImage;
