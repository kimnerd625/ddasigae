import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AccountForm from "./AccountForm";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.refreshSession();

  return (
    <div className="w-full min-h-screen justify-center items-center flex px-4">
      <AccountForm session={session} />
    </div>
  );
}
