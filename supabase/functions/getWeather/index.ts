import { corsHeaders } from "../../../_shared/cors.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const locationX = url.searchParams.get("locationX");
  const locationY = url.searchParams.get("locationY");
  const date = url.searchParams.get("date");
  const time = url.searchParams.get("time");

  const weatherResponse = await fetch(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=6TTb%2Bz76gFbDezbDPXaVoi2ZUqi3q9TVTfGlvf9QKP5Ug7qIfHlQkEq6vE6jp2RpW7aCkL%2BWlEX%2F68xghyVTXA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${time}&nx=${locationX}&ny=${locationY}`
  );
  const weatherData = await weatherResponse.json();

  return new Response(JSON.stringify(weatherData), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
