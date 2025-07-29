"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/navbar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { ConnectButton } from "@/components/landing-page/connect-button";



const MobileNavbar: React.FC = () => {
  const pathname = usePathname();
  const { isConnected, address } = useAccount();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreateExploreOpen, setIsCreateExploreOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const createExploreRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close overlays when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (createExploreRef.current && !createExploreRef.current.contains(event.target as Node)) {
        setIsCreateExploreOpen(false);
      }
    };

    if (isSearchOpen || isCreateExploreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen, isCreateExploreOpen]);

  const navbarContent = (
    <div className="md:hidden overflow-x-hidden">
      {/* Mobile Navigation Bar */}
      <nav className="bg-black border-b border-gray-800 px-2 py-3 w-full">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/icons/starkbid.svg"
              alt="StarkBid Logo"
              width={80}
              height={32}
              className="h-6 w-auto"
            />

            {/* Search icon */}
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </Button>
          </div>



          {/* Right side - Shopping, Profile, Menu */}
          <div className="flex items-center gap-2">
            {/* Shopping bag */}
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingBag size={20} />
            </Button>

            {/* User profile */}
            {isConnected && address ? (
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full overflow-hidden bg-purple-600"
              >
                <Image 
                  src="/1.png" 
                  alt="profile" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-xs font-bold">SB</div>';
                  }}
                />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <User size={16} className="text-blue-600" />
              </Button>
            )}

            {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white hover:text-gray-300 transition-colors"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-black border-l border-gray-800 w-full max-w-none !w-full !z-[99999] px-0"
                style={{ zIndex: 99999 }}
              >
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Navigation items */}
                  <div className="flex flex-col space-y-2 py-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="flex items-center gap-4 p-4 rounded-lg transition-colors text-white hover:text-white"
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = '<div class="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-white text-xs">?</div>';
                          }}
                        />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Connect Wallet Button - Fixed at bottom */}
                  <div className="mt-auto p-6">
                    <div className="[&>button]:w-full [&>button]:bg-purple-600 [&>button]:hover:bg-purple-700 [&>button]:text-white [&>button]:font-bold [&>button]:py-3 [&>button]:px-4 [&>button]:rounded-lg [&>button]:transition-colors">
                      <ConnectButton />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden">
          <div ref={searchRef} className="absolute top-20 left-4 right-4 bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Search size={20} className="text-white" />
              <input
                type="text"
                placeholder="Search for NFTs, Collections or users"
                className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Create & Explore Menu Overlay */}
      {isCreateExploreOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden">
          <div ref={createExploreRef} className="absolute top-20 left-4 right-4 bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Create & Explore</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCreateExploreOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="space-y-2">
              <Link
                href="/create-nfts"
                className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsCreateExploreOpen(false)}
              >
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M12 4L10 8H6L8 12H12L10 16L16 12H12L14 8H18L12 4Z" />
                  </svg>
                </div>
                <span className="font-medium">Create NFT</span>
              </Link>
              <Link
                href="/collections"
                className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsCreateExploreOpen(false)}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <span className="font-medium">Explore Collections</span>
              </Link>
              <Link
                href="/nfts"
                className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsCreateExploreOpen(false)}
              >
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-medium">Browse NFTs</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Only render on client
  if (!mounted) return null;
  
  return navbarContent;
};

export default MobileNavbar; 