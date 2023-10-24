"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Header({ user }) {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username `)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <div className="w-full flex flex-row justify-center items-center mt-4 gap-2 ">
      <h2>환영합니다!</h2>{" "}
      {username ? (
        <h2>{username}님~</h2>
      ) : (
        <Link href="/auth">
          <h2 className="underline text-blue">따시개에 로그인하기</h2>
        </Link>
      )}
    </div>
  );
}
