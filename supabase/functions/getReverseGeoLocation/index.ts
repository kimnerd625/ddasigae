import { corsHeaders } from "../../../_shared/cors.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const myLocation = url.searchParams.get("myLocation");

  const reverseGeoResponse = await fetch(
    `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${myLocation}&sourcecrs=default&orders=roadaddr&output=json`
  );
  const reverseGeoData = await reverseGeoResponse.json();

  return new Response(JSON.stringify(reverseGeoData), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "X-NCP-APIGW-API-KEY-ID": `${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`,
      "X-NCP-APIGW-API-KEY": `${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET}`,
    },
  });
});
