import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import PocketBase from "pocketbase";
import { getNextjsCookie } from "./lib/utils/server-cookie";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const request_cookie = req.cookies.get("pb_auth");

  const cookie = await getNextjsCookie(request_cookie);

  const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);

  if (cookie) {
    try {
      pb.authStore.loadFromCookie(cookie);
    } catch (error) {
      pb.authStore.clear();
      res.headers.set(
        "set-cookie",
        pb.authStore.exportToCookie({ httpOnly: false })
      );
    }
  }

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (error) {
    pb.authStore.clear();
    res.headers.set(
      "set-cookie",
      pb.authStore.exportToCookie({ httpOnly: false })
    );
  }

  // if (!pb.authStore.model && !req.nextUrl.pathname.startsWith("/login")) {
  //   console.log(req.nextUrl.pathname);

  //   const redirectTo = new URL("/login", req.url);
  //   // redirectTo.search = new URLSearchParams({
  //   //   next: req.nextUrl.pathname ? req.nextUrl.pathname : "/",
  //   // }).toString();

  //   return NextResponse.redirect(redirectTo);
  // }

  // if (pb.authStore.model && req.nextUrl.pathname.startsWith("/login")) {
  //   const next_url = req.headers.get("next-url") as string;

  //   const redirectTo = new URL(next_url ? next_url : "/", req.url);
  //   return NextResponse.redirect(redirectTo);
  // }
  // const supabase = createMiddlewareClient({ req, res });
  // await supabase.auth.getSession();
  return res;
}
