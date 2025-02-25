
import TrendingGaming from "@/components/TrendingGaming";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1216]">
      <main className="">
        <Hero />
        <TrendingGaming/>
      </main>
    </div>
  );
}
