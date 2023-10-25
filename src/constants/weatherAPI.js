import axios from "axios";

const OPEN_API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY;

export const fetchDailyWeatherData = async (
  locationX,
  locationY,
  date,
  time
) => {
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=${OPEN_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${locationX}&ny=${locationY}`;

  try {
    const res = await axios.get(url);
    console.log("결과값: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("아이템: ", items);
    return items;
  } catch (error) {
    console.log("에러 발생");
    console.log(error);
  }
};
