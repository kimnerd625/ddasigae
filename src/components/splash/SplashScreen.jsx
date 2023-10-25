"use client";

import { useEffect } from "react";
import Image from "next/image";

import splashImage from "/public/images/logoImage.jpg";

export default function SplashScreen({ finishLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div className="w-full min-h-screen items-center justify-center flex flex-col bg-white">
      <Image src={splashImage} width={300} alt="로고 이미지" id="logo" />
    </div>
  );
}
