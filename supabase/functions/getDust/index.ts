import { corsHeaders } from "../../../_shared/cors.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const date = url.searchParams.get("date");

  const dustResponse = await fetch(
    `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=6TTb%2Bz76gFbDezbDPXaVoi2ZUqi3q9TVTfGlvf9QKP5Ug7qIfHlQkEq6vE6jp2RpW7aCkL%2BWlEX%2F68xghyVTXA%3D%3D&returnType=JSON&numOfRows=1000&pageNo=1&areaNo=1100000000&searchDate=${date}&informCode=PM25`
  );
  const dustData = await ultravioletResponse.json();

  return new Response(JSON.stringify(ultravioletData), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
