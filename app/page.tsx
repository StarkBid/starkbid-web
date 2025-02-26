
import TrendingGaming from "@/components/TrendingGaming";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1216]">
      <main className="">
        <Hero />
        <TrendingGaming/>
        <Newsletter />
      </main>
    </div>
  );
}
