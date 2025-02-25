import Hero from "@/components/Hero";
import NotableCollections from "@/components/notablenft"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1216]">
      <main className="">
        <Hero />
        <NotableCollections />
      </main>
    </div>
  );
}
