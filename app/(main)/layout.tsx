import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import React from "react";
import { Fustat } from "next/font/google";

const futsat = Fustat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${futsat.className} flex flex-col min-h-screen overflow-x-hidden`}>
      <Navbar />
      <MobileNavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
