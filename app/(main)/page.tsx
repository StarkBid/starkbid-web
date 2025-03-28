import TrendingCollections from '@/components/landing-page/trending-collections';
import TrendingNft from '@/components/landing-page/trending-nft'


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className=" flex flex-col gap-20 px-4 sm">
        <TrendingNft/>
        <TrendingCollections/>
      </main>
    </div>
  );
}
