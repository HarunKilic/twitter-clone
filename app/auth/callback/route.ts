import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { appwriteClient } from "../../appwrite-client";
import { Account } from "appwrite";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.url);

  // const account = new Account(appwriteClient);

  // const nAccount = await account.get();

  // const code = requestUrl.searchParams.get("code");
  const code = requestUrl.searchParams.get("secret");
  console.log({ jwt: request.url }, code);

  // if (code) {
  //   const supabase = createRouteHandlerClient({ cookies });
  //   await supabase.auth.exchangeCodeForSession(code);
  // }

  // return NextResponse.redirect(requestUrl.origin);
}
