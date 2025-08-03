"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ConnectButton } from "./connect-button";
import { useAccount } from "@starknet-react/core";
import { navItems } from "@/constants/navbar";
import { NotificationsPopover } from "@/components/settings/notifications-popover";
import { Button } from "@/components/ui/button";

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

// Define global window interface
declare global {
  interface Window {
    toggleSettingsSidebar?: () => void;
  }
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isConnected } = useAccount();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if we're on a settings page
  const isSettingsPage = pathname.startsWith("/settings");

  const handleSettingsMenuToggle = () => {
    if (typeof window !== "undefined" && window.toggleSettingsSidebar) {
      window.toggleSettingsSidebar();
    }
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div className="w-full hidden md:block">
      <nav className="max-w-[1440px] w-full mx-auto text-white flex items-center justify-between px-2 sm:px-4 py-2 border-b border-b-darkerGray">
        <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6 flex-1 min-w-0">
          {/* Mobile Settings Menu Toggle - Only show on settings pages */}
          {isSettingsPage && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white flex-shrink-0"
              onClick={handleSettingsMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          {/* Logo - Fixed aspect ratio */}
          <Link href={"/"} className="flex items-center gap-x-2 flex-shrink-0">
            <div className="relative w-20 h-8 sm:w-[100px] sm:h-10">
              <Image
                src="/icons/starkbid-logo.png"
                alt="StarkBid Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Search Bar - Hide on small screens, show on medium+ */}
          <div className="hidden md:flex items-center bg-[#1E1E1E] rounded-lg px-2 py-1 flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for NFTs, Collections or users"
                className="w-full bg-[#1E1E1E] text-white px-1 rounded-lg focus:outline-none text-sm"
              />
            </div>
            <MdSearch
              size={24}
              className="text-ash bg-darkGray p-1 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300 flex-shrink-0"
            />
          </div>

          {/* Navigation Items - Hide on small/medium, show on large+ */}
          <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-4" ref={dropdownRef}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const IconComponent = isActive ? item.activeIcon : item.icon;
              const isDropdownItem = item.name === "Create" || item.name === "Explore";
              
              if (isDropdownItem) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="flex gap-1 items-center p-2 rounded-lg transition-colors duration-300 whitespace-nowrap hover:text-[#9333EA] group"
                    >
                      <Image
                        src={activeDropdown === item.name || hoveredItem === item.name ? item.activeIcon : IconComponent || "/placeholder.svg"}
                        alt={item.name}
                        width={20}
                        height={20}
                        quality={90}
                        className="transition-opacity"
                      />
                      <span className={`text-xs xl:text-sm font-medium ${activeDropdown === item.name ? 'text-[#9333EA]' : 'text-ash group-hover:text-[#9333EA]'}`}>
                        {item.name}
                      </span>
                      {activeDropdown === item.name && (
                        <svg
                          className="w-3 h-3 ml-1 rotate-180 transition-transform text-[#9333EA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 bg-black border border-gray-800 rounded-lg shadow-lg z-50 min-w-[200px]">
                        {(item.name === "Create" ? createItems : exploreItems).map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-3 p-3 transition-colors duration-200 text-ash hover:text-[#9333EA] group"
                          >
                            <Image
                              src={subItem.icon}
                              alt={subItem.name}
                              width={16}
                              height={16}
                              className="w-4 h-4 transition-opacity"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = '<div class="w-4 h-4 bg-gray-600 rounded flex items-center justify-center text-white text-xs">?</div>';
                              }}
                            />
                            <span className="text-sm">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
                              return (
                  <Link
                    href={item.path}
                    key={item.name}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="flex gap-1 items-center p-2 rounded-lg transition-colors duration-300 whitespace-nowrap hover:text-[#9333EA] group"
                  >
                    <Image
                      src={isActive || hoveredItem === item.name ? item.activeIcon : item.icon || "/placeholder.svg"}
                      alt={item.name}
                      width={20}
                      height={20}
                      quality={90}
                      className="transition-opacity"
                    />
                    <span className="text-xs xl:text-sm font-medium text-ash group-hover:text-[#9333EA]">
                      {item.name}
                    </span>
                  </Link>
                );
            })}
          </div>
        </div>

        {/* Right side - Always visible but responsive */}
        <div className="flex items-center gap-x-2 sm:gap-x-4 flex-shrink-0">
          {/* Mobile search icon - Show only on small screens */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileSearch}
              className="text-ash hover:text-white transition-colors duration-300 p-1"
            >
              {mobileSearchOpen ? <X size={24} /> : <MdSearch size={24} />}
            </Button>
          </div>

          {/* Notification and Shopping - Hide shopping on very small screens */}
          <div className="flex items-center gap-x-2 sm:gap-x-3">
            {isConnected && <NotificationsPopover />}
            <div className="hidden xs:block">
              <Image
                src="/svgs/shopping.svg"
                alt="shopping"
                width={20}
                height={20}
                quality={90}
                className="sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Connect Wallet Button - Always visible but responsive text */}
          <div className="flex-shrink-0">
            <ConnectButton />
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Collapsible */}
      {mobileSearchOpen && (
        <div className="md:hidden bg-darkerGray border-b border-darkGray px-4 py-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center bg-[#1E1E1E] rounded-lg px-3 py-2">
            <MdSearch size={20} className="text-ash mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for NFTs, Collections or users"
              className="w-full bg-transparent text-white focus:outline-none text-sm"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
