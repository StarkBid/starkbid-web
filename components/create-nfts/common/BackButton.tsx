"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#292929] border border-darkerGray rounded-md text-gray-400 hover:text-white hover:bg-[#3a3a3a] transition-all duration-200 ${className}`}
    >
      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}
