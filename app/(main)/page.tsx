
import Hero from "@/components/landing-page/Hero";

import TrendingNft from '@/components/landing-page/trending-nft'



export default function Home() {
  return (
 
    <div >
    <div className="min-h-screen bg-black">

      <main className=" flex flex-col gap-20 px-4 sm">
        <TrendingNft/>
      </main>
      <Hero />
    </div>
  );
}
