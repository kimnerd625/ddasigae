import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "./components/header/Header";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.refreshSession();

  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header user={user} />
    </main>
  );
}
