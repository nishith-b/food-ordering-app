"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const BannerSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="banner-slider w-full h-[100%]"
    >
      <SwiperSlide>
        <div
          className="item w-full h-[100%]"
          style={{
            backgroundImage: "url('/image-01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[300px] flex items-center justify-center bg-gray-200">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[300px] flex items-center justify-center bg-gray-300">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
