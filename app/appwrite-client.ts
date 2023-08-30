import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

export const APPWRITE_PROJECT_SESSION = `a_session_${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`;

const account = new Account(client);

const AppwriteService = {
  signout: async () => {
    await account.deleteSession("current");
  },
  getAccount: async () => {
    return await account.get();
  },
  // getAccountPicture: (name: string) =>
  setSession: (hash: string) => {
    const authCookies: any = {};
    authCookies[APPWRITE_PROJECT_SESSION] = hash;
    client.headers["X-Fallback-Cookies"] = JSON.stringify(authCookies);
  },
  signInWithGithub: () =>
    account.createOAuth2Session(
      "github",
      `${location.origin}/auth/oauth2/success`
    ),
};

export { AppwriteService };
