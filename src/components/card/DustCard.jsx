"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getTodayDate } from "@/utils/getDate";
import { fetchDustData } from "@/constants/weatherAPI";

import sunblockImage from "/public/images/illusts/sunblock.png";

export default function DustCard() {
  const [avgDust, setAvgDust] = useState(); // 평균 미세먼지 지수

  // 미세먼지 지수 확인을 위한 날짜 및 시간 설정
  const date = getTodayDate();
  const editedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
    6,
    8
  )}}`;

  // 미세먼지 지수 렌더링
  useEffect(() => {
    const getDustData = async () => {
      const data = await fetchDustData(editedDate);
      console.log("미세먼지: ", data);
      setAvgDust(6);
    };
    getDustData();
  }, []);

  // 미세먼지 지수에 따른 라이팅 설정
  let dustContents;
  switch (true) {
    case avgDust > 5:
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-blue font-light text-xs">높음</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            햇빛이 뜨거워요! 양산, 선글라스, 모자 최대한 챙겨요!
          </h4>
        </>
      );
      break;
    case avgDust > 2:
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-gray font-light text-xs">보통</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            미세먼지 차단제를 발라주세요!
          </h4>
        </>
      );
      break;
    default:
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-blue font-light text-xs">낮음</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            미세먼지으로부터 안전해요~
          </h4>
        </>
      );
  }

  return (
    <div className="rounded-2xl mb-1 overflow-hidden flex flex-row justify-start items-center w-full px-4 py-2 bg-[#FFFBEE] gap-4 drop-shadow-md">
      <div className="rounded-[50%] bg-main p-1">
        <Image src={sunblockImage} alt="미세먼지 일러스트" width={40} />
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        {avgDust ? <h4>{dustContents}</h4> : <h4>로딩중...</h4>}
      </div>
    </div>
  );
}
