"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { supabase } from "@/app/constants/supabase";
import useUserInfoStore from "../store/userInfo";

export default function AccountForm({ session }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const user = session?.user;

  const { username, setUsername } = useUserInfoStore();

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
        console.log("왜 안 돼");
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
      alert("성공적으로 정보가 수정되었습니다!");
      router.push("/");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget p-4 w-full mx-auto bg-beige rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="email" className="block text-black font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={session?.user.email}
          disabled
          className="w-full bg-white text-black border border-black py-2 px-4 rounded focus:outline-none focus:bg-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-black font-bold mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={fullname || ""}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full bg-white text-black border border-black py-2 px-4 rounded focus:outline-none focus:bg-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="username" className="block text-black font-bold mb-2">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white text-black border border-black py-2 px-4 rounded focus:outline-none focus:bg-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="website" className="block text-black font-bold mb-2">
          Website
        </label>
        <input
          id="website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full bg-white text-black border border-black py-2 px-4 rounded focus:outline-none focus:bg-white"
        />
      </div>

      <div className="mt-4 w-full">
        <button
          className="button primary block w-full px-4 py-2 bg-main text-white rounded hover:bg-blue-dark focus:outline-none"
          onClick={() =>
            updateProfile({ fullname, username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div className="mt-4 w-full">
        <form action="/auth/signout" method="post">
          <button
            className="button block w-full px-4 py-2 bg-gray text-black rounded hover:bg-gray-dark focus:outline-none"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
