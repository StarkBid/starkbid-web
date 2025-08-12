import Hero from "@/components/landing-page/Hero";
import TrendingCollections from "@/components/landing-page/trending-collections";
import TrendingNft from "@/components/landing-page/trending-nft";
import YouMayAlsoLike from "@/components/landing-page/you-may-also-like";
import Newsletter from "@/components/newsletter";
import LiveAuction from "@/components/landing-page/live-auction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className=" flex flex-col gap-20 px-0 sm:px-4 sm">
        <Hero />
        <TrendingNft />
        <TrendingCollections />
        <LiveAuction />
        <YouMayAlsoLike />
        <Newsletter />
      </main>
    </div>
  );
}
