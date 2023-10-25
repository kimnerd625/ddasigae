// temp: 이미지 처리
import Image from "next/image";

import Header from "@/components/header/Header";
import WeatherCarousel from "@/components/weather/WeatherCarousel";
import HomeCard from "@/components/card/HomeCard";

import clothesImage from "/public/images/logoImage.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-6">
      <Header />
      <WeatherCarousel />
      <div className="border-1 border-gray rounded-2xl drop-shadow-md mb-1 overflow-hidden flex flex-col justify-center items-center w-[320px] h-[320px] bg-[#f7f7f7]">
        <h4 className="text-black text-2xl">옷차림 올 곳</h4>
      </div>
      <HomeCard />
    </div>
  );
}
