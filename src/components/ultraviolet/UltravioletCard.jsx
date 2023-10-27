// deprecated - HomeCard 컴포넌트에 편입

"use client";

import { getTodayDate } from "@/utils/getDate";
import { useEffect, useState } from "react";
import { fetchUltravioletRayData } from "@/constants/weatherAPI";

export default function UltravioletCard() {
  const date = getTodayDate();
  const time = date + "06";

  useEffect(() => {
    const fetchUltravioletData = async () => {
      const data = await fetchUltravioletRayData(time);
      console.log(data);
    };
    fetchUltravioletData();
  });

  return (
    <div>
      <h2>자외선차단</h2>
    </div>
  );
}
