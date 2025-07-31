"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, User, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/navbar";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "@starknet-react/core";
import { ConnectButton } from "@/components/landing-page/connect-button";



// Create and Explore submenu items
const createItems = [
  { name: "NFTs", path: "/create-nfts", icon: "/svgs/nfts.svg" },
  { name: "Collections", path: "/collections", icon: "/svgs/collections.svg" },
  { name: "Marketplace", path: "/marketplace", icon: "/svgs/marketplace.svg" }
];

const exploreItems = [
  { name: "NFTs", path: "/nfts", icon: "/svgs/nfts.svg" },
  { name: "Users", path: "/users", icon: "/svgs/user.svg" },
  { name: "Collections", path: "/collections", icon: "/svgs/collections.svg" },
  { name: "Marketplace", path: "/marketplace", icon: "/svgs/marketplace.svg" }
];

// Social media items
const socialItems = [
  { name: "Telegram", icon: "/svgs/telegram.svg" },
  { name: "YouTube", icon: "/svgs/youtube.svg" },
  { name: "X", icon: "/svgs/x.svg" },
  { name: "Discord", icon: "/svgs/discord.svg" },
  { name: "Instagram", icon: "/svgs/instagram.svg" }
];

const MobileNavbar: React.FC = () => {
  const { isConnected, address } = useAccount();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreateExploreOpen, setIsCreateExploreOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Reset dropdowns when menu is closed
  useEffect(() => {
    if (!isCreateExploreOpen) {
      setActiveDropdown(null);
    }
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isCreateExploreOpen, isMenuOpen]);

  // Function to close the entire menu
  const closeMenu = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const navbarContent = (
    <div className="md:hidden overflow-x-hidden">
      {/* Mobile Navigation Bar */}
      <nav className="bg-black border-b border-gray-800 px-2 py-3 w-full">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/icons/starkbid-icon.svg"
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
              className="w-6 h-6 text-gray-300 hover:text-white transition-colors"
            >
              <Image
                src="/svgs/marketplace-menu.svg"
                alt="shopping"
                width={30}
                height={30}
                className="sm:w-6 sm:h-6"
              />
            </Button>

            {/* User profile */}
            {isConnected && address ? (
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 rounded-full overflow-hidden bg-purple-600"
              >
                <Image 
                  src="/profile.png" 
                  alt="profile" 
                  width={20} 
                  height={20} 
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
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-white hover:text-gray-300 transition-colors"
                >
                  <Image
                    src="/svgs/hamburger-menu.svg"
                    alt="menu"
                    width={40}
                    height={40}
                    className="sm:w-6 sm:h-6"
                  />
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
                    {activeDropdown ? (
                      // Show only dropdown content when active
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        {/* Show the active dropdown button with purple color */}
                        {navItems.map((item) => {
                          if (item.name === activeDropdown) {
                            return (
                              <button
                                key={item.name}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center justify-between w-full p-4 rounded-lg transition-colors text-purple-400 hover:text-purple-300"
                              >
                                <div className="flex items-center gap-4">
                                  <Image
                                    src={activeDropdown ? item.activeIcon : item.icon}
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
                                  <span className="font-medium text-[#9333EA]">{item.name}</span>
                                </div>
                                {/* Dropdown arrow pointing up when active */}
                                <svg 
                                  className="w-4 h-4 rotate-180 transition-transform text-[#9333EA]"
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            );
                          }
                          return null;
                        })}
                        
                        {/* Dropdown items */}
                        <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {(activeDropdown === "Create" ? createItems : exploreItems).map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={closeMenu}
                              className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 text-white hover:text-white"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                                <Image
                                  src={subItem.icon}
                                  alt={subItem.name}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML = '<div class="w-4 h-4 bg-gray-600 rounded flex items-center justify-center text-white text-xs">?</div>';
                                  }}
                                />
                              </div>
                              <span className="text-sm text-white">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Show all navigation items when no dropdown is active
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        {navItems.map((item) => {
                          // Check if this item should show dropdown behavior
                          const isDropdownItem = item.name === "Create" || item.name === "Explore";
                          
                          if (isDropdownItem) {
                            return (
                              <button
                                key={item.name}
                                onClick={() => setActiveDropdown(item.name)}
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
                              </button>
                            );
                          }
                          
                          // Regular navigation item (not Create or Explore)
                          return (
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
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto p-6">
                    {!isConnected ? (
                      /* Connect Wallet Button - Only show when not connected */
                      <div className="[&>button]:w-full [&>button]:bg-purple-600 [&>button]:hover:bg-purple-700 [&>button]:text-white [&>button]:font-bold [&>button]:py-3 [&>button]:px-4 [&>button]:rounded-lg [&>button]:transition-colors">
                        <ConnectButton />
                      </div>
                    ) : (
                      /* Social Media Footer - Only show when connected */
                      <div>
                        <h3 className="text-white font-medium mb-3">Join The Community</h3>
                        <div className="flex gap-3">
                          {socialItems.map((social) => (
                            <Button 
                              key={social.name}
                              variant="ghost" 
                              size="icon" 
                              className="w-10 h-10 rounded-lg"
                            >
                              <Image
                                src={social.icon}
                                alt={social.name}
                                width={20}
                                height={20}
                                className="w-10 h-10"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = '<div class="w-5 h-5 bg-gray-600 rounded flex items-center justify-center text-white text-xs">?</div>';
                                }}
                              />
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
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