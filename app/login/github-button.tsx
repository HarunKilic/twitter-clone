'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { authentication, createDirectus, rest } from '@directus/sdk';
import Image from "next/image";
import { Account } from "appwrite";
import { pb } from "../pocketbase-client";
import { AppwriteService } from "../appwrite-client";
// import { appwriteClient } from "../appwrite-client";

export default function GithubButton() {
  // const account = new Account(appwriteClient)
  // const supabase = createClientComponentClient<Database>()
  // const handleSignIn = async () => {
  //     await supabase.auth.signInWithOAuth({
  //         provider: 'github',
  //         options: {
  //             redirectTo: `${location.origin}/auth/callback`
  //         }
  //     })
  // }
  const handleSignIn = async () => {
    // account.createOAuth2Session('github', window.location.href,
    //   window.location.href);
    // const nAccount = await account.get()
    // // const jwt = await account.createJWT();
    // console.log(nAccount)
    AppwriteService.signInWithGithub();
    // console.log(bob)
    // const authData = await pb.collection("users").authWithOAuth2({ provider: 'github' });
    // console.log(authData);
    // document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  }
  return (
    <button onClick={handleSignIn} className="hover:bg-gray-800 p-8 rounded-xl">
      <Image src="/github-mark-white.png" alt="Github Logo" width={100} height={100} />
    </button>
  )
}
