import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import AuthButtonClient from "@/app/auth-button";
import GithubButton from "@/app/login/github-button";
import { NextRequest } from "next/server";
import PocketBase from "pocketbase";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const pb = new PocketBase("https://twitter-clone-nw.pockethost.io");

function encodeNextPBCookie(next_cookie: RequestCookie | undefined) {
  if (!next_cookie) {
    return "";
  }

  const cookie = { pb_auth: next_cookie.value };
  let encodedCookie = "";
  for (const [key, value] of Object.entries(cookie)) {
    encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(value)}; `;
  }

  return encodedCookie.trimEnd();
}

export const dynamic = "force-dynamic";
export default async function Login(request: NextRequest) {
  // const request_cookie = cookies().get('pb_auth')
  // const authcookie = encodeNextPBCookie(request_cookie)

  // if (authcookie)
  //   pb.authStore.loadFromCookie(authcookie);

  // console.log("pb_auth model after cookie load === ", pb.authStore.model)
  // console.log(request_cookie);

  // const bob = cookies();
  // console.log(bob)
  // const supabase = createServerComponentClient({cookies})

  // const {data: {session}} = await supabase.auth.getSession();

  // if(session) {
  //     redirect('/')
  // }

  return (
    <div className="flex-1 flex justify-center items-center">
      <GithubButton />
    </div>
  )
}
