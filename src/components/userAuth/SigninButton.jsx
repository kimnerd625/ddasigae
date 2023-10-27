"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SigninButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p className="text-green">{session.user.name}님🐶</p>
        {/* <button onClick={() => signOut()}>로그아웃</button> */}
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-blue">
      따시개에 로그인하기🐾
    </button>
  );
}
