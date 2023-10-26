import "./globals.css";
import localFont from "next/font/local";

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
      <head></head>
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
