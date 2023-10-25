import Header from "@/components/header/Header";
import WeatherCarousel from "@/components/weather/WeatherCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-6">
      <Header />
      <WeatherCarousel />
    </div>
  );
}
