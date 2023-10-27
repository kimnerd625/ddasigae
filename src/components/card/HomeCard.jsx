"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getTodayDate } from "@/utils/getDate";
import { fetchUltravioletRayData } from "@/constants/weatherAPI";

import sunblockImage from "/public/images/illusts/sunblock.png";

export default function HomeCard() {
  const [avgUltraViolet, setAvgUltraViolet] = useState(); // 평균 자외선 지수

  // 자외선 지수 확인을 위한 날짜 및 시간 설정: 금일 오전 6시 보도로 설정
  const date = getTodayDate();
  const time = date + "06";

  // 자외선 지수 렌더링
  useEffect(() => {
    const fetchUltravioletData = async () => {
      const data = await fetchUltravioletRayData(time);
      const item = data[0];
      const values = Object.keys(item)
        .filter((key) => key.startsWith("h"))
        .map((key) => parseInt(item[key], 10))
        .filter((value) => !isNaN(value))
        .slice(0, 9);
      const averageValue =
        values.reduce((acc, val) => acc + val, 0) / values.length;
      const roundedAverage = averageValue.toFixed(2);
      setAvgUltraViolet(roundedAverage);
    };
    fetchUltravioletData();
  }, []);

  // 자외선 지수에 따른 라이팅 설정
  let ultraContents;
  switch (true) {
    case avgUltraViolet > 5:
      ultraContents = (
        <>
          <h4 className="font-light text-xs">
            자외선 지수:{" "}
            <span className="text-blue font-light text-xs">높음</span>
          </h4>
          <h4 className="text-black font-medium text-lg tracking-tight">
            햇빛이 뜨거워요! 양산, 선글라스, 모자 최대한 챙겨요!
          </h4>
        </>
      );
      break;
    case avgUltraViolet > 2:
      ultraContents = (
        <>
          <h4 className="font-light text-xs">
            자외선 지수:{" "}
            <span className="text-gray font-light text-xs">보통</span>
          </h4>
          <h4 className="text-black font-medium text-lg tracking-tight">
            자외선 차단제를 발라주세요!
          </h4>
        </>
      );
      break;
    default:
      ultraContents = (
        <>
          <h4 className="font-light text-xs">
            자외선 지수:{" "}
            <span className="text-blue font-light text-xs">낮음</span>
          </h4>
          <h4 className="text-black font-medium text-lg tracking-tight">
            자외선 지수가 낮아요
          </h4>
        </>
      );
  }

  return (
    <div className="border border-gray rounded-2xl mb-1 overflow-hidden flex flex-row justify-start items-center w-full px-4 py-2 bg-[#fefefe] gap-4">
      <div className="rounded-[50%] bg-main p-1">
        <Image src={sunblockImage} alt="자외선 일러스트" width={40} />
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        {avgUltraViolet ? <h4>{ultraContents}</h4> : <h4>로딩중...</h4>}
      </div>
    </div>
  );
}
