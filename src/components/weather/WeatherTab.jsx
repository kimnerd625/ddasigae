import TemperatureContainer from "./TemperatureContainer";
import WeatherCarousel from "./WeatherCarousel";

export default function WeatherTab() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-4">
      <TemperatureContainer />
      <WeatherCarousel />
    </div>
  );
}
