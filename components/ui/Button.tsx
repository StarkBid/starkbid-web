import Arrow from "@/public/arrow.png";
import Image from "next/image";

export const ViewAllButton: React.FC = () => (
  <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
    View all
    <Image src={Arrow} alt="arrow icon" />
  </button>
);