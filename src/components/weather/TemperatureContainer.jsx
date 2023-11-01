"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import { getTodayDate } from "@/utils/getDate";

export default function TemperatureContainer() {
  const [temp, setTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();

  const todayDate = getTodayDate();
  const todayMonth = todayDate.slice(4, 6);
  const todayDay = todayDate.slice(6, 8);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.532600&lon=127.024612&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric`
      )
      .then((response) => {
        console.log(response);
        setTemp(Math.floor(response.data.main.temp));
        setMaxTemp(Math.floor(response.data.main.temp_max));
        setMinTemp(Math.floor(response.data.main.temp_min));
      });
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-start items-start">
      <div className="flex flex-row justify-start items-center gap-1 px-1">
        <span className="text-black font-semibold text-base">오늘</span>
        <h5 className="text-black font-light text-base tracking-tight">
          {todayMonth}월
        </h5>
        <h5 className="text-black font-light text-base tracking-tight">
          {todayDay}일
        </h5>
      </div>
      <div className="flex flex-row justify-start items-center gap-3">
        <h5 className="font-thin text-7xl tracking-tight">
          {temp ? temp : 20}
        </h5>
        <div className="flex flex-col justify-between items-center gap-6">
          <span className="text-red font-medium tracking-tight text-lg align-top leading-3">
            {maxTemp ? maxTemp : 20}
          </span>
          <h5 className="text-blue font-medium tracking-tight text-lg align-top leading-3">
            {minTemp ? minTemp : 20}
          </h5>
        </div>
      </div>
    </div>
  );
}
