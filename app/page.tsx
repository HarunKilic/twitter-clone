import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AuthButtonServer from './auth-button-server'
import { redirect } from "next/navigation";
import NewTweet from "@/app/new-tweets";
import Likes from "@/app/likes";
import Tweets from "@/app/tweets";

import { Account } from 'appwrite';
import { getAccount } from './page-data';

export const dynamic = "force-dynamic";
export default async function Home() {
  const account = await getAccount();
  // const supabase = createServerComponentClient<Database>({cookies})
  // const { data: { session } } = await supabase.auth.getSession()
  // const { data } = await supabase.from('tweets').select('*, author: profiles(*), likes(*)').order('created_at', { ascending: false })

  // const tweets = data?.map(tweet => ({
  //   ...tweet,
  //   author: Array.isArray(tweet.author) ? tweet.author[0] : tweet.author,
  //   user_has_liked_tweet: !!tweet.likes.find(like => like.user_id === session.user.id),
  //   likes: tweet.likes.length
  // })) ?? [];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between px-4 py-6 border border-gray-800 border-t-0">
        <h1 className="text-xl font-bold">Home</h1>
        <AuthButtonServer />
      </div>
      <NewTweet user={account} />
      {/*
<Tweets tweets={tweets} /> */}
    </div>
  )
}
