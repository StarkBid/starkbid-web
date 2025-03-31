"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import Link from "next/link";
import { ConnectButton } from "./connect-button";
import { useAccount } from "@starknet-react/core";
import { navItems } from "@/constants/navbar";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isConnected } = useAccount();



  return (
    <nav className="bg-[#101213] text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2">
          <Image
            src="/svgs/logo.svg"
            alt="StarkBid Logo"
            width={30}
            height={30}
            quality={90}
          />
          <p className="text-2xl font-bold">Starkbid</p>
        </div>

        {/* Search Bar */}
        <div className="mx-4">
          <div className="relative w-fit">
            <input
              type="text"
              placeholder="Search for NFTs, Collections or users"
              className="w-[19rem] bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <MdSearch
              size={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <div className="w-fit flex items-center gap-x-4 ml-12">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const IconComponent = isActive ? item.activeIcon : item.icon;

            return (
              <Link
                href={item.path}
                key={item.name}
                className="p-2 rounded-lg transition-colors duration-300"
              >
                <Image
                  src={IconComponent}
                  alt={item.name}
                  width={24}
                  height={24}
                  quality={90}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center gap-x-4">
          {isConnected && (
            <div className="w-fit h-fit relative">
              <Image
                src="/svgs/notification.svg"
                alt="notification"
                width={24}
                height={24}
                quality={90}
              />
              <div className="w-3 h-3 rounded-full bg-red-700 absolute -top-1 -right-1" />
            </div>
          )}

          <Image
            src="/svgs/shopping.svg"
            alt="shopping"
            width={24}
            height={24}
            quality={90}
          />
        </div>
        {/* Connect Wallet Button */}
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Navbar;
