import { NextResponse, type NextRequest } from "next/server";
import { APPWRITE_PROJECT_SESSION } from "../../../appwrite-client";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const secret = requestUrl.searchParams.get("secret");

  // if (secret) AppwriteService.setSession(secret);
  // const cookiesStr = (response.)

  console.log(requestUrl.searchParams.get("key"));

  // if (secret) cookies().set("session-1", secret);

  // if (code) {
  //   const supabase = createRouteHandlerClient({ cookies });
  //   await supabase.auth.exchangeCodeForSession(code);
  // }

  const nextJsResponse = NextResponse.redirect(requestUrl.origin);

  nextJsResponse.cookies.set(
    APPWRITE_PROJECT_SESSION,
    secret!
    // {
    //   domain: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    //   httpOnly: false,
    //   path: "/",
    // }
  );

  return nextJsResponse;
}
