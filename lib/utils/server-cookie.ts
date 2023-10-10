import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { encodeNextPBCookie } from "./encode-cookie";
import { cookies } from "next/headers";

export async function getNextjsCookie(request_cookie?: RequestCookie) {
  try {
    if (request_cookie) {
      const cookie = encodeNextPBCookie(request_cookie);
      return cookie;
    }

    const next_cookie = await cookies().get("pb_auth");
    const cookie = encodeNextPBCookie(next_cookie);

    return cookie;
  } catch (error) {
    console.log("issue getting next-cookie  === ", error);
    return "";
  }
}
