"use client";
import { useEffect } from "react";

import Header from "@/components/header/Header";
import WeatherTab from "@/components/weather/WeatherTab";
import ClothesList from "@/components/clothesList/ClothesList";
import UltravioletCard from "@/components/card/UltravioletCard";

export default function Home() {
  // useEffect(() => {
  //   // 페이지가 마운트되면 터치 스크롤 이벤트를 막습니다.
  //   const handleTouchMove = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("touchmove", handleTouchMove, {
  //     passive: false,
  //   });

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
  //   return () => {
  //     document.removeEventListener("touchmove", handleTouchMove);
  //   };
  // }, []);
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-3 relative h-screen overflow-hidden">
      <Header />
      <WeatherTab />
      <div className="w-full px-4">
        <ClothesList />
      </div>
      <div className="w-full px-4">
        <UltravioletCard />
      </div>
    </div>
  );
}
