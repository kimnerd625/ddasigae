"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex flex-row justify-center items-center mt-4 gap-2">
      <h2>환영합니다!</h2>
      <Link href="/auth">
        <h2 className="underline text-blue">따시개에 로그인하기</h2>
      </Link>
    </div>
  );
}
