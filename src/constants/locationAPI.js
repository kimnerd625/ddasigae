import axios from "axios";

export const fetchMyLocationData = async ({ myLocation }) => {
  const url = `https://vryxooqjvagumaurqvpc.supabase.co/functions/v1/getReverseGeoLocation?myLocation=${myLocation}`;

  try {
    const res = await axios.get(url);
    console.log("지역 주소 불러오기: ", res);
    const items = res?.data?.response?.body?.items?.item;
    console.log("지역 주소 결과값: ", items);
    return items;
  } catch (error) {
    console.log("지역 주소 불러오기 오류 발생");
    console.log(error);
  }
};
