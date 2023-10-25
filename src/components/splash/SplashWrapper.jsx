"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({ children }) {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading && isHome) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, isHome]);

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>{children}</>
      )}
    </>
  );
}
