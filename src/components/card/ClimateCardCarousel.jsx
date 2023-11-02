"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import UltravioletCard from "./UltravioletCard";
import DustCard from "./DustCard";
import FlowerCard from "./FlowerCard";

export default function ClimateCardCarousel() {
  return (
    <>
      <Swiper slidesPerView={1} spaceBetween={10} mousewheel={true}>
        <SwiperSlide>
          <UltravioletCard />
        </SwiperSlide>
        <SwiperSlide>
          <DustCard />
        </SwiperSlide>
        <SwiperSlide>
          <FlowerCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
