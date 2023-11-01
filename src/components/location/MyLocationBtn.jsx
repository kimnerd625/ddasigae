"use client";
import { useEffect, useState } from "react";

import { findClosestPlace } from "@/utils/getNearestLocation";

import addressData from "/public/address.json";

export default function MyLocationBtn() {
  const [myCurrentLocation, setMyCurrentLocation] = useState();
  const [myCurrentLocationAddress, setMyCurrentLocationAddress] = useState();
  const [myTown, setMyTown] = useState();
  const [myVillage, setMyVillage] = useState();
  const seoulData = addressData["서울특별시"];

  useEffect(() => {
    let myLocation = "";

    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        myLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        // 현재 위치 추적
        let currentPosition = [myLocation.latitude, myLocation.longitude];

        setMyCurrentLocation(currentPosition);
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
      myLocation = { latitude: 37.4862618, longitude: 127.1222903 };

      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      setMyCurrentLocation(currentPosition);
    }
  }, [setMyCurrentLocation]);

  useEffect(() => {
    if (myCurrentLocation) {
      const closestPlace = findClosestPlace(
        myCurrentLocation[0],
        myCurrentLocation[1],
        seoulData
      );

      if (closestPlace) {
        console.log(
          `가장 가까운 곳: ${closestPlace["시도"]} ${closestPlace["시군구"]} ${closestPlace["읍면동/구"]}`
        );
        setMyCurrentLocationAddress(
          `${closestPlace["시군구"]} ${closestPlace["읍면동/구"]}`
        );
        setMyTown(closestPlace["시군구"]);
        setMyVillage(closestPlace["읍면동/구"]);
      } else {
        console.log("가장 가까운 곳을 찾을 수 없습니다.");
      }
    }
  }, [myCurrentLocation]);

  return (
    <>
      {myCurrentLocationAddress ? (
        <div className="flex flex-row justify-center items-center gap-1">
          <span className="text-black font-normal text-2xl tracking-tight">
            {myTown}
          </span>
          <span className="text-black font-semibold text-2xl tracking-tight">
            {myVillage}
          </span>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <span className="text-black font-normal text-2xl tracking-tight">
            서대문구
          </span>
          <span className="text-black font-semibold text-2xl tracking-tight">
            대현동
          </span>
        </div>
      )}
    </>
  );
}
