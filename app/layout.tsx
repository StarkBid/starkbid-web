import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarknetProvider from "@/providers/starknet-provider";
import { WalletProvider } from "@/providers/wallet-connect-context";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import { SocketProvider } from "@/components/socket-provider";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StarkBid",
  description: "Starkbid is a pioneering NFT and digital asset bidding platform built on the Starknet Chain. It provides a secure, transparent, and efficient marketplace for artists, collectors, musicians, writers, and crypto enthusiasts, enabling them to trade NFT artworks, crypto collectibles, music, lyrics, and more. By harnessing Starknet's scalability and security, Starkbid offers low fees, rapid transactions, and robust bidding processes that empower creators and drive higher revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col">
          <AnnouncementBanner />
          <main className="flex-grow bg-black px-2 md:px-0">
            <StarknetProvider>
              <WalletProvider>
                <SocketProvider>
                  <ClientLayout>{children}</ClientLayout>
                </SocketProvider>
              </WalletProvider>
            </StarknetProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
