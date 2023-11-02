"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getTodayDate } from "@/utils/getDate";
import { fetchFlowerData } from "@/constants/weatherAPI";

import flowerImage from "/public/images/illusts/flower.png";

export default function FlowerCard() {
  const [avgFlower, setAvgFlower] = useState("낮음"); // 평균 꽃가루 지수

  // // 꽃가루 지수 확인을 위한 날짜 및 시간 설정
  // const date = getTodayDate();
  // const editedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
  //   6,
  //   8
  // )}`;

  // // 꽃가루 지수 렌더링
  // useEffect(() => {
  //   const getFlowerData = async () => {
  //     const data = await fetchFlowerData(editedDate);
  //     console.log("꽃가루: ", data.informGrade.slice(5, 7));
  //     setAvgFlower(data.informGrade.slice(5, 7));
  //   };
  //   getFlowerData();
  // }, []);

  // 꽃가루 지수에 따른 라이팅 설정
  let flowerContents;
  switch (avgFlower) {
    case "나쁨":
      flowerContents = (
        <>
          <h4 className="font-light text-xs">
            꽃가루 지수:{" "}
            <span className="text-red font-light text-xs">나쁨</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            마스크 챙겨서 기관지 보호해요!
          </h4>
        </>
      );
      break;
    case "보통":
      flowerContents = (
        <>
          <h4 className="font-light text-xs">
            꽃가루 지수:{" "}
            <span className="text-gray font-light text-xs">보통</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            오늘 꽃가루 나쁘지 않아요~!
          </h4>
        </>
      );
      break;
    default:
      flowerContents = (
        <>
          <h4 className="font-light text-xs">
            꽃가루 지수:{" "}
            <span className="text-blue font-light text-xs">좋음</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            알레르기는 오늘 걱정 마세요!
          </h4>
        </>
      );
  }

  return (
    <div className="rounded-2xl mb-1 overflow-hidden flex flex-row justify-start items-center w-full px-4 py-2 bg-[#FEF3FC] gap-4 drop-shadow-md">
      <div className="rounded-[50%] bg-[#FFE0F8] p-1">
        <Image src={flowerImage} alt="꽃가루 일러스트" width={40} />
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        {avgFlower ? <h4>{flowerContents}</h4> : <h4>로딩중...</h4>}
      </div>
    </div>
  );
}
