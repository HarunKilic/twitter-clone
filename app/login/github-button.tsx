'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { authentication, createDirectus, readProviders, rest } from '@directus/sdk';
import Image from "next/image";
import { Account } from "appwrite";
import { pb } from "../pocketbase-client";
import { AppwriteService } from "../appwrite-client";
import { directus } from "../directus-client";
// import { appwriteClient } from "../appwrite-client";

export default function GithubButton() {

  const handleSignIn = async () => {
    await pb.collection("users").authWithOAuth2({
      provider: 'github', createData: {
        name: 'Harun'
      }
    });
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  }

  return (
    <button onClick={handleSignIn} className="hover:bg-gray-800 p-8 rounded-xl">
      <Image src="/github-mark-white.png" alt="Github Logo" width={100} height={100} />
    </button>
  )
}
