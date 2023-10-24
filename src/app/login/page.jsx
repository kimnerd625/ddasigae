"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../constants/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-main rounded shadow-lg">
      <input
        className="w-full mb-2 px-3 py-2 border rounded"
        name="email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="w-full mb-2 px-3 py-2 border rounded"
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        className="w-full mb-2 px-3 py-2 bg-blue text-white rounded hover:bg-black"
        onClick={handleSignUp}
      >
        Sign up
      </button>
      <button
        className="w-full mb-2 px-3 py-2 bg-blue text-white rounded hover:bg-black"
        onClick={handleSignIn}
      >
        Sign in
      </button>
      <button
        className="w-full mb-2 px-3 py-2 bg-red text-white rounded hover:bg-black"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
