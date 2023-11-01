"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SigninButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex flex-row justify-start items-center gap-1">
        <img
          src={session.user.image}
          alt="프로필 이미지"
          width={22}
          height={22}
          className="rounded-3xl"
        />
        <p className="text-black text-lg tracking-tight font-normal">
          {session.user.name} 님
        </p>
        {/* <button onClick={() => signOut()}>로그아웃</button> */}
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="text-blue text-lg tracking-tight font-normal"
    >
      로그인
    </button>
  );
}
