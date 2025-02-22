"use client";

import { Search, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarkLogo } from "@/public/images";
import Image from "next/image";

export interface NavLink {
  name: string;
  href: string;
}

export interface NavbarProps {
  onConnect?: () => void;
}

const navLinks: NavLink[] = [
  { name: "Discover", href: "/discover" },
  { name: "Staking", href: "/staking" },
  { name: "Sell", href: "/sell" },
  { name: "Mint", href: "/mint" },
  { name: "Explore", href: "/explore" },
];

export default function Navbar({ onConnect }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-10 xl:px-20 py-4 lg:py-6 bg-[#0D1216] w-full lg:px-6">
        <div className="flex flow-row gap-5">
          <div className="flex">
            <Link href="/" className="flex items-center gap-2">
              <Image src={StarkLogo} alt="Starkbid logo" />
              <span className="text-white font-bold text-lg">StarkBid</span>
            </Link>
          </div>

          <div className="hidden md:relative md:flex  w-fit bg-white/20 rounded-lg items-center">
            <div className="absolute left-3 top-2 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search for NFTs and Collections"
              className="w-full lg:w-[400px]  sm:max-w-md h-10 pl-10 pr-4  rounded-lg bg-transparent text-white placeholder:text-white/80 outline-none focus:outline-none duration-200 ring-2 ring-transparent focus:ring-2 focus:ring-[#7F56D9]"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-bold text-base hover:text-[#9E77ED] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-5">
            <motion.button
              onClick={onConnect}
              whileTap={{ scale: 0.98 }}
              className="px-[18px] !py-1 bg-[#7F56D9] text-white rounded-lg font-semibold text-base 
                       shadow-[0_0_0_3px_#8c6bd533] hover:bg-[#7F56D9]/90 transition-colors"
            >
              Connect Wallet
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-colors"
            >
              <ChevronDown className="text-white w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConnect}
            className="px-4 py-2 bg-[#7F56D9] text-white rounded-lg font-medium
                     shadow-[0_0_0_4px_#8C6BD5] hover:bg-[#7F56D9]/90 transition-colors"
          >
            Connect
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full  sm:w-1/2 bg-[#1a1727] border-l border-white/10 p-6 z-50"
            >
              <div className="relative flex w-full bg-[#D5D7DA00] rounded-lg items-center mb-6">
                <div className="absolute left-3 top-2 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-white/60" />
                </div>
                <input
                  type="text"
                  placeholder="Search for NFTs and Collections"
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-transparent text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                />
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-[#9E77ED] transition-colors text-lg"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
