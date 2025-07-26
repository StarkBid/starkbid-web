"use client";

import { Copy, Globe, Edit, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function WalletPage() {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText("3S2By3ce03...3ba8");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Wallet</h1>
        <p className="text-gray-400">
          Select and manage your notification preferences to control how and
          when you receive updates to your email and in-app.
        </p>
      </div>

      {/* Balance Card  */}
      <div className="bg-purple rounded-lg p-6 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-purple-200 text-sm mb-3">Available Balance</p>
              {/* Enhanced balance text - bolder and positioned lower */}
              <h2 className="text-5xl font-black tracking-tight leading-none mb-2">
                00.25 ETH
              </h2>
              <div className="w-16 h-1 bg-white/30 rounded-full"></div>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-sm mb-2">Outstanding</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 relative">
                <Image
                  src="/Eth_icon.png"
                  alt="ETH"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-gray-900 font-medium text-sm">ETH</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Connected Wallet */}
      <div>
        <h3 className="text-white font-medium mb-4">Connected Wallet</h3>

        <div className="border-2 border-dashed border-darkerGray rounded-lg p-4  space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/metamask_icon.png" />
                <AvatarFallback className="bg-orange-500 text-white">
                  M
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">MetaMask</span>
                  <span className="text-green-400 text-sm">Ethereum</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm">3S2By3ce03...3ba8</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Copy icon with background */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyAddress}
                className="h-8 w-8 bg-deepGray hover:bg-darkGray text-gray-300 hover:text-white rounded-md"
              >
                <Copy className="h-4 w-4" />
              </Button>
              {/* External link  */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-deepGray hover:bg-darkGray text-gray-300 hover:text-white rounded-md"
              >
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Manage Wallet Button*/}
          <Button
            variant="outline"
            className="w-full bg-deepGray hover:bg-darkGray text-white "
          >
            <Edit className="h-4 w-4 mr-2" />
            Manage Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}
