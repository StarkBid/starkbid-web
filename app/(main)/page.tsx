import TrendingCollections from '@/components/landing-page/trending-collections';
import TrendingNft from '@/components/landing-page/trending-nft'
import Newsletter from '@/components/newsletter';


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className=" flex flex-col gap-20 px-4 sm">
        <TrendingNft/>
        <Newsletter/>
      </main>
    </div>
  );
}
