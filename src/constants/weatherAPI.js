import axios from "axios";

export const fetchDailyWeatherData = async (
  locationX,
  locationY,
  date,
  time
) => {
  const url = `https://vryxooqjvagumaurqvpc.supabase.co/functions/v1/getWeather?locationX=${locationX}&locationY=${locationY}&date=${date}&time=${time}`;

  try {
    const res = await axios.get(url);
    console.log("날씨 예보 결과값: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("날씨 예보 아이템: ", items);
    return items;
  } catch (error) {
    console.log("날씨 예보 에러 발생");
    console.log(error);
  }
};

export const fetchUltravioletRayData = async (time) => {
  const url = `https://vryxooqjvagumaurqvpc.supabase.co/functions/v1/getUltraviolet?time=${time}`;

  try {
    const res = await axios.get(url);
    console.log("자외선 지수 결과값: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("자외선 지수 아이템: ", items);
    return items;
  } catch (error) {
    console.log("자외선 지수 에러 발생");
    console.log(error);
  }
};

export const fetchDustData = async (date) => {
  const url = `https://vryxooqjvagumaurqvpc.supabase.co/functions/v1/getDust?date=${date}`;

  try {
    const res = await axios.get(url);
    console.log("미세먼지 결과값: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("미세먼지 아이템: ", items);
    return items;
  } catch (error) {
    console.log("미세먼지 에러 발생");
    console.log(error);
  }
};
