import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

import SplashWrapper from "@/components/splash/SplashWrapper";
import Providers from "@/components/userAuth/Providers";

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata = {
  title: "따시개",
  description: "Developed & Published by Team.따시개",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        />
      </head>
      <body className={Pretendard.className}>
        <div className="select-none">
          <Providers>
            <SplashWrapper>{children}</SplashWrapper>
          </Providers>
        </div>
      </body>
    </html>
  );
}
