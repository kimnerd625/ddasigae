"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { fetchDailyWeatherData } from "@/constants/weatherAPI";
import { getYesterdayDate } from "@/utils/getDate";
import {
  groupDataWithTwoHours,
  processGroupedData,
} from "@/utils/groupWeatherData";

import WeatherCard from "./WeatherCard";

export default function WeatherCarousel() {
  const [weatherList, setWeatherList] = useState();

  const date = getYesterdayDate();
  const time = "2300";
  const locationX = "127";
  const locationY = "60";

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchDailyWeatherData(
        locationX,
        locationY,
        date,
        time
      );
      console.log("데이터: ", data);
      if (data) {
        const groupedData = groupDataWithTwoHours(data);
        const processedData = processGroupedData(groupedData);
        setWeatherList(processedData);
        console.log(processedData);
      }
    };
    fetchWeatherData();
  }, []);

  useEffect(() => {
    console.log(weatherList);
  }, [weatherList]);

  const generateSwiperSlides = () => {
    const timeKeys = Object.keys(weatherList);
    const sortedTimes = timeKeys.sort(); // 시간을 정렬합니다.

    return sortedTimes.map((time) => {
      const dataForTime = weatherList[time];
      return (
        <SwiperSlide key={time}>
          <div className="">
            <WeatherCard time={time} data={dataForTime} />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-2">
      {weatherList ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          mousewheel={true}
          className="w-full"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {generateSwiperSlides()}
        </Swiper>
      ) : (
        <div className="h-[130px] flex flex-col justify-center items-center">
          <h2>데이터 로딩 중입니다...</h2>
        </div>
      )}
    </div>
  );
}
