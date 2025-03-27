import TrendingNft from '@/components/landing-page/trending-nft'
import YouMayAlsoLike from '@/components/landing-page/you-may-also-like'


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className=" flex flex-col gap-20 px-4 sm">
        <TrendingNft/>
        <YouMayAlsoLike/>
      </main>
    </div>
  );
}
