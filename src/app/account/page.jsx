import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  console.log("Code:", code); // 코드가 정상적으로 추출되는지 확인

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
    console.log("Code exchanged for session"); // 코드가 세션으로 정상적으로 교환되는지 확인
  }

  const redirectURL = new URL("/account", req.url);
  console.log("Redirect URL:", redirectURL); // 리다이렉션할 URL 확인

  return NextResponse.redirect(redirectURL);
}
