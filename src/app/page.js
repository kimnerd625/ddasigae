import Header from "@/components/header/Header";
import WeatherTab from "@/components/weather/WeatherTab";
import ClothesList from "@/components/clothesList/ClothesList";
import ClimateCardCarousel from "@/components/card/ClimateCardCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-3 relative h-screen overflow-hidden">
      <Header />
      <WeatherTab />
      <div className="w-full px-4">
        <ClothesList />
      </div>
      <div className="w-full px-4">
        <ClimateCardCarousel />
      </div>
    </div>
  );
}
