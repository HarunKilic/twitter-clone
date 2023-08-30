import { cookies } from "next/headers";
import "server-only";
import { APPWRITE_PROJECT_SESSION, AppwriteService } from "./appwrite-client";

export async function getAccount() {
  const cookieStore = cookies();

  const session = cookieStore.get(APPWRITE_PROJECT_SESSION);

  AppwriteService.setSession(session ? session.value : "");

  let account;
  try {
    account = await AppwriteService.getAccount();
  } catch (error) {
    account = null;
  }

  return account;
}
