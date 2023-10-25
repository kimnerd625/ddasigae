import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import cloudImage from "/public/images/cloud.png";
import darkCloudImage from "/public/images/dark.png";
import sunImage from "/public/images/sunny.png";
import rainImage from "/public/images/rain.png";

export default function WeatherCard({ time, data }) {
  const [TMP, setTMP] = useState(data.TMP);
  const [SKY, setSKY] = useState(data.SKY);
  const [PTY, setPTY] = useState(data.PTY);
  // const [UUU, setUUU] = useState(data.UUU);
  // const [VEC, setVEC] = useState(data.VEC);
  // const [VVV, setVVV] = useState(data.VVV);
  // const [WAV, setWAV] = useState(data.WAV);
  // const [WSD, setWSD] = useState(data.WSD);
  // const [REH, setREH] = useState(data.REH);
  // const [POP, setPOP] = useState(data.POP);
  // const [PCP, setPCP] = useState(data.PCP);

  useEffect(() => {
    setTMP(data.TMP);
    setSKY(data.SKY);
    setPTY(data.PTY);
    // setUUU(data.UUU);
    // setVEC(data.VEC);
    // setVVV(data.VVV);
    // setWAV(data.WAV);
    // setWSD(data.WSD);
    // setREH(data.REH);
    // setPOP(data.POP);
    // setPCP(data.PCP);
  }, [data]);

  let weatherImage;

  switch (PTY) {
    case 0:
      switch (SKY) {
        case 1:
          weatherImage = sunImage;
          break;
        case 3:
          weatherImage = cloudImage;
          break;
        case 4:
          weatherImage = darkCloudImage;
          break;
        default:
          weatherImage = sunImage;
          break;
      }
      break;
    case 1:
      weatherImage = rainImage;
      break;
    default:
      weatherImage = sunImage;
      break;
  }

  const formattedTime = `${parseInt(time.slice(0, 2), 10)}시`;

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden ">
      <h4 className="text-black font-medium">{formattedTime}</h4>
      <Image src={weatherImage} width={80} alt="날씨 이미지" />
      <h4 className="text-black font-medium">{TMP}°C</h4>
    </div>
  );
}
