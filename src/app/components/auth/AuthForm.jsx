"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  const customTheme = {
    default: {
      colors: {
        brand: "#1d452b",
        brandAccent: "#1d452b",
        brandButtonText: "white",
        inputPlaceholder: "#B9B9B9",
        messageText: "#36AE92",
        messageTextDanger: "#F27367",
      },
      width: "100%",
      radii: {
        borderRadiusButton: "10px",
        buttonBorderRadius: "10px",
        inputBorderRadius: "10px",
      },
      space: {
        spaceSmall: "4px",
        spaceMedium: "8px",
        spaceLarge: "16px",
        labelBottomMargin: "8px",
        anchorBottomMargin: "4px",
        emailInputSpacing: "4px",
        socialAuthSpacing: "4px",
        buttonPadding: "10px 15px",
        inputPadding: "10px 15px",
      },
      fontSizes: {
        baseInputSize: "18px",
        baseLabelSize: "14px",
      },
    },
  };

  return (
    <div className="w-full px-4">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: customTheme }}
        localization={{
          variables: {
            magic_link: {
              email_input_label: "이메일 주소 📬️",
              email_input_placeholder: "ddasigae@gmail.com",
              button_label: "이메일로 로그인하기 🐶",
              loading_button_label: "이메일을 전송 중입니다..! 🐾",
              link_text: "간편 로그인 이메일 보내기",
              confirmation_text: "이메일 우편함을 확인해보세요!",
            },
          },
        }}
        theme="default"
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  );
}
