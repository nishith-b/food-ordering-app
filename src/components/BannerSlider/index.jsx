"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export const BannerSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="banner-slider w-full h-full"
    >
      <SwiperSlide>
        <div
          className="item h-full w-full flex items-center px-[120px]"
          style={{
            backgroundImage: "url('/image-01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1]">
              <span className="block">CRISPY</span>
              <span className="block">CHICKEN</span>
            </h2>
            <h3>
              <span className="text-white/80">Open Daily :</span>
              <span className="text-yellow-500"> 11:30AM - 8:30PM</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="item h-full w-full flex items-center px-[120px]"
          style={{
            backgroundImage: "url('/image-02.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1]">
              <span className="block">DOUBLE</span>
              <span className="block">BURGER</span>
            </h2>
            <h3>
              <span className="text-white/80">Order Now: </span>
              <span className="text-yellow-500">+91 8105623537</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="item h-full w-full flex items-center px-[120px]"
          style={{
            backgroundImage: "url('/image-03.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info ml-auto">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1]">
              <span className="block">CHICKEN</span>
              <span className="block">FINGERS</span>
            </h2>
            <h3>
              <span className="text-white/80">Enjoy the food you love </span>
              <span className="text-yellow-500"> FROM $69.99</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
