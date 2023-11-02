"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import UltravioletCard from "./UltravioletCard";
import DustCard from "./DustCard";

export default function ClimateCardCarousel() {
  return (
    <>
      <Swiper slidesPerView={1} mousewheel={true} className="w-full">
        <SwiperSlide>
          <UltravioletCard />
        </SwiperSlide>
        <SwiperSlide>
          <DustCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
