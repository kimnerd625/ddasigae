"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getTodayDate } from "@/utils/getDate";
import { fetchDustData } from "@/constants/weatherAPI";

import maskImage from "/public/images/illusts/mask.png";

export default function DustCard() {
  const [avgDust, setAvgDust] = useState(); // 평균 미세먼지 지수

  // 미세먼지 지수 확인을 위한 날짜 및 시간 설정
  const date = getTodayDate();
  const editedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
    6,
    8
  )}`;

  // 미세먼지 지수 렌더링
  useEffect(() => {
    const getDustData = async () => {
      const data = await fetchDustData(editedDate);
      console.log("미세먼지: ", data.informGrade.slice(5, 7));
      setAvgDust(data.informGrade.slice(5, 7));
    };
    getDustData();
  }, []);

  // 미세먼지 지수에 따른 라이팅 설정
  let dustContents;
  switch (avgDust) {
    case "나쁨":
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-red font-light text-xs">나쁨</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            마스크 챙겨서 기관지 보호해요!
          </h4>
        </>
      );
      break;
    case "보통":
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-gray font-light text-xs">보통</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            오늘 미세먼지 나쁘지 않아요~!
          </h4>
        </>
      );
      break;
    default:
      dustContents = (
        <>
          <h4 className="font-light text-xs">
            미세먼지 지수:{" "}
            <span className="text-blue font-light text-xs">좋음</span>
          </h4>
          <h4 className="text-black font-medium text-xl tracking-tight">
            오늘 공기 되게 쾌적해요!
          </h4>
        </>
      );
  }

  return (
    <div className="rounded-2xl mb-1 overflow-hidden flex flex-row justify-start items-center w-full px-4 py-2 bg-[#F6F6F6] gap-4 drop-shadow-md">
      <div className="rounded-[50%] bg-[#ffffff] p-1">
        <Image src={maskImage} alt="미세먼지 일러스트" width={40} />
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        {avgDust ? <h4>{dustContents}</h4> : <h4>로딩중...</h4>}
      </div>
    </div>
  );
}
