import { corsHeaders } from "../../../_shared/cors.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const time = url.searchParams.get("time");

  const ultravioletResponse = await fetch(
    `http://apis.data.go.kr/1360000/LivingWthrIdxServiceV4/getUVIdxV4?ServiceKey=6TTb%2Bz76gFbDezbDPXaVoi2ZUqi3q9TVTfGlvf9QKP5Ug7qIfHlQkEq6vE6jp2RpW7aCkL%2BWlEX%2F68xghyVTXA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&areaNo=1100000000&time=${time}`
  );
  const ultravioletData = await ultravioletResponse.json();

  return new Response(JSON.stringify(ultravioletData), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
