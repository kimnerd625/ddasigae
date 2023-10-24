"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { fetchDailyWeatherData } from "@/app/constants/weatherAPI";

export default function WeatherCarousel() {
  const date = "20231025";
  const time = "0000";
  const locationX = "127";
  const locationY = "55";

  useEffect(() => {
    const fetchData = async () => {
      data = await fetchDailyWeatherData(locationX, locationY, date, time);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      ></Swiper>
    </div>
  );
}
