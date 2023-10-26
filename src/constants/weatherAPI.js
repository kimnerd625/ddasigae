import axios from "axios";

export const fetchDailyWeatherData = async (
  locationX,
  locationY,
  date,
  time
) => {
  const url = `https://vryxooqjvagumaurqvpc.supabase.co/functions/v1/getWeather?locationX=${locationX}&locationY=${locationY}&date=${date}&time=${time}`;

  try {
    const res = await axios.get(proxyUrl + url, proxyHeader);
    console.log("결과값: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("아이템: ", items);
    return items;
  } catch (error) {
    console.log("에러 발생");
    console.log(error);
  }
};
