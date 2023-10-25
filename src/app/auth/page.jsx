import Image from "next/image";

import logoImage from "/public/images/logoImage.jpg";

import AuthForm from "./auth-form";

export default function AuthPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <Image src={logoImage} width={300} alt="로고 이미지" />
      <div className="w-full">
        <AuthForm />
      </div>
    </div>
  );
}
