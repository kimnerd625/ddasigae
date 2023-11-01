"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SigninButton from "../userAuth/SigninButton";
import MyLocationBtn from "../location/MyLocationBtn";

export default function Header() {
  return (
    <div className="w-full flex flex-row justify-between items-center mt-4 gap-2 px-4">
      <MyLocationBtn />
      <SigninButton />
    </div>
  );
}
