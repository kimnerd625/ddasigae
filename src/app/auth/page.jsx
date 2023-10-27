import Image from "next/image";

import AuthForm from "./auth-form";

export default function AuthPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-full">
        <AuthForm />
      </div>
    </div>
  );
}
