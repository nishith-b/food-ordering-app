"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const BannerSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="banner-slider w-full h-[100%]"
    >
      <SwiperSlide>
        <div
          className="item h-full w-[100%] relative flex items-center pl-[120px]"
          style={{
            backgroundImage: "url('/image-01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info w-max">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1] text-left ml-auto">
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
          className="item h-full w-[100%] relative flex items-center pl-[120px]"
          style={{
            backgroundImage: "url('/image-02.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info w-max duration-500">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1] text-left ml-auto">
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
          className="item h-full w-[100%] relative flex items-center pr-[120px]"
          style={{
            backgroundImage: "url('/image-03.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info w-max ml-auto">
            <h2 className="text-white text-[100px] font-bold uppercase leading-[1.1] text-left">
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
    </Swiper>
  );
};