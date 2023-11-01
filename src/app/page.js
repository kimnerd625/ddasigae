import Header from "@/components/header/Header";
import WeatherCarousel from "@/components/weather/WeatherCarousel";
import HomeCard from "@/components/card/HomeCard";
import ClothesList from "@/components/clothesList/ClothesList";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-4 relative">
      <Header />
      <WeatherCarousel />
      <div className="w-full px-4">
        <ClothesList />
      </div>
      <div className="w-full px-4">
        <HomeCard />
      </div>
    </div>
  );
}
