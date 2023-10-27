// temp: 이미지 처리
import Image from "next/image";

import Header from "@/components/header/Header";
import WeatherCarousel from "@/components/weather/WeatherCarousel";
import HomeCard from "@/components/card/HomeCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-6">
      <Header />
      <WeatherCarousel />
      <div className="w-full px-4">
        <div className="border-1 border-gray rounded-2xl drop-shadow-md mb-1 overflow-hidden flex flex-col justify-center items-center w-full h-[320px] bg-[#f7f7f7]">
          <h4 className="text-black text-2xl">옷차림 올 곳</h4>
        </div>
      </div>
      <div className="w-full px-4">
        <HomeCard />
      </div>
    </div>
  );
}
