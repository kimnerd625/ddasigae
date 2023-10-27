"use client";

import { useEffect, useState } from "react";
import { getTodayDate } from "@/utils/getDate";
import { fetchUltravioletRayData } from "@/constants/weatherAPI";

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
      ultraContents = "오늘 자외선 지수가 높네요! 자외선 차단제를 권장해요~ :)";
      break;
    default:
      ultraContents = "오늘 자외선 지수가 좋네요~!";
  }

  return (
    <div className="border-1 border-gray rounded-2xl drop-shadow-md mb-1 overflow-hidden flex flex-col justify-center items-center w-full px-2 py-2 bg-[#f7f7f7]">
      {avgUltraViolet ? <h4>{ultraContents}</h4> : <h4>로딩중...</h4>}
    </div>
  );
}
