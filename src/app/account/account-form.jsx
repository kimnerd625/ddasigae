"use client";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget min-h-screen bg-beige p-4 rounded-md shadow-md flex justify-center items-center flex-col">
      <div className="w-full mb-2">
        <label htmlFor="email" className="block text-black font-bold mb-1">
          이메일
        </label>
        <input
          id="email"
          type="text"
          value={session?.user.email}
          disabled
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="fullName" className="block text-black font-bold mb-1">
          이름
        </label>
        <input
          id="fullName"
          type="text"
          value={fullname || ""}
          onChange={(e) => setFullname(e.target.value)}
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="username" className="block text-black font-bold mb-1">
          닉네임
        </label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="website" className="block text-black font-bold mb-1">
          웹사이트
        </label>
        <input
          id="website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div className="w-full mb-4">
        <button
          className="w-full button primary block bg-main text-white px-4 py-2 rounded-md"
          onClick={() =>
            updateProfile({ fullname, username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "로딩중..." : "업데이트하기"}
        </button>
      </div>

      <div className="w-full">
        <form action="/auth/signout" method="post">
          <button
            className="w-full button block bg-gray text-black px-4 py-2 rounded-md"
            type="submit"
          >
            로그아웃하기
          </button>
        </form>
      </div>
    </div>
  );
}
