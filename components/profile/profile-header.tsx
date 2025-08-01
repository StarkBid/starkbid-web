"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Copy,
  Globe,
  Instagram,
  MessageCircle,
  Send,
  Edit,
} from "lucide-react";
import Image from "next/image";

export default function ProfileHeader() {
  const [showFullBio, setShowFullBio] = useState(false);
  // Sample bio text - in a real app this would come from props or API
  const fullBio = "This would contain a short bio about Cattie Negtar. carvings that tell the stories of ancestors long past. Every ancient story from. The pink-blackened horne specialize in creating unique digital collectibles that blend traditional art techniques with cutting-edge technology";
  const bioLimit = 150;
  const shouldShowButton = fullBio.length > bioLimit;

  return (
    <div className="bg-gradient-to-b from-purple via-[#101213] to-[#101213] relative">
      <Card className="max-w-[1440px] mx-auto py-6 border-none rounded-none bg-transparent">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Profile */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <Avatar className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-4 border-white flex-shrink-0">
                  <Image
                    src="/avatars/avatar-2.svg"
                    width={150}
                    height={150}
                    className="h-auto"
                    alt="StarkBid logo"
                  />
                </Avatar>

                <div className="space-y-1 lg:space-y-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Cattie Negtar
                    </h1>
                    <Image
                      src="/verified.png"
                      width={30}
                      height={30}
                      className="w-[20px] lg:w-[30px] h-auto"
                      alt="StarkBid logo"
                    />
                  </div>
                  <p className="text-gray-400 font-mono text-md sm:text-sm">
                    0x9d863ed03...3ba8
                  </p>
                  {/* Verify Account Section */}
                  <div className="text-gray-400 flex items-center justify-center sm:justify-start gap-2">
                    <Image
                      src="/verified.png"
                      width={30}
                      height={30}
                      className="w-[15px] lg:w-[30px] h-auto "
                      alt="StarkBid logo"
                    />
                    <span className="text-green-500 text-sm sm:text-md font-bold">
                      Verify your account
                    </span>
                  </div>

                  {/* Edit Profile Button - now inline and responsive */}
                  <div className="flex justify-center sm:justify-start pt-2">
                    <Button
                      variant="outline"
                      className="bg-[#1C1D1F]/70 border-[#2D2E32]/50 text-white hover:bg-[#2D2E32]/80 hover:text-white gap-2 px-4 py-2 backdrop-blur-sm"
                    >
                      <span className="hidden sm:inline">Edit Profile</span>
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Bio Section for mobile*/}
                  <div className="pt-2 block lg:hidden">
                    <p className="text-sm leading-relaxed text-gray-400 tracking-wide">
                      {showFullBio ? fullBio : fullBio.slice(0, bioLimit)}
                      {shouldShowButton && !showFullBio && "..."}
                      {shouldShowButton && (
                        <button
                          onClick={() => setShowFullBio(!showFullBio)}
                          className="text-white font-bold text-sm transition-colors ml-1"
                        >
                          {showFullBio ? " Show less" : " Show more"}
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm">Share</span>
                    <Share2 className="w-4 h-4" />
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>

              {/* Network Badges */}
              <div className="flex flex-wrap gap-4 sm:gap-4 justify-center sm:justify-start">
                <Badge className="bg-[#1C1D1F] text-white rounded-[9px] p-3 text-sm">
                  Ethereum
                  <Image
                    src="/svgs/mdi_ethereum.svg"
                    width={16}
                    height={16}
                    className="w-3 sm:w-4 h-auto ml-1 sm:ml-2"
                    alt="Ethereum logo"
                  />
                </Badge>
                <Badge className="bg-[#1C1D1F] text-white rounded-[9px] p-3 text-sm">
                  Starknet
                  <Image
                    src="/svgs/token_starknet.svg"
                    width={16}
                    height={16}
                    className="w-3 sm:w-4 h-auto ml-1 sm:ml-2"
                    alt="Starknet logo"
                  />
                </Badge>
                <Badge className="text-gray-400 bg-[#1C1D1F] rounded-[9px] p-3 gap-2 text-sm">
                  Date joined <span className="text-white"> May 15, 2025</span>
                </Badge>
              </div>
            </div>

            {/* Right Section - Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-0 text-left lg:text-center">
                <div className="space-y-2 lg:border-r border-dashed border-[#8E9BAE] lg:pr-6">
                  <p className="text-[#8E9BAE] text-sm">Total Value</p>
                  <p className="text-white text-sm lg:text-2xl font-bold">0.00 ETH</p>
                </div>
                <div className="space-y-2 lg:border-r border-dashed border-[#8E9BAE] lg:pr-6">
                  <p className="text-[#8E9BAE] text-sm">Total (USD)</p>
                  <p className="text-white text-sm lg:text-2xl font-bold">$0.00</p>
                </div>
                <div className="space-y-2 lg:border-r border-dashed border-[#8E9BAE] lg:pr-6">
                  <p className="text-[#8E9BAE] text-sm">Owned Items</p>
                  <p className="text-white text-sm lg:text-2xl font-bold">0</p>
                </div>
                <div className="space-y-2 lg:border-r border-dashed border-[#8E9BAE] lg:pr-6">
                  <p className="text-[#8E9BAE] text-sm">Collections</p>
                  <p className="text-white text-sm lg:text-2xl font-bold">0</p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="space-y-4 hidden lg:block">
                <h3 className="text-white text-lg font-semibold">Bio</h3>
                <div className="">
                  <p className="text-gray-500 text-sm">__________</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
