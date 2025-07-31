"use client";

import { Suspense } from "react";
import NftViewer from "../nft-explorer/nft-viewer";
import { profileMockNFTs } from "../../lib/mockData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ActivityTab from "../activity";
import ProfileCollectionsGrid from "./ProfileCollectionsGrid";

const tabs = [
  { id: "owned", label: "Owned Items", mobileLabel: "Items", active: true },
  { id: "created", label: "Created", mobileLabel: "Created", active: false },
  { id: "activity", label: "Activity", mobileLabel: "Activity", active: false },
  { id: "collections", label: "Collections", mobileLabel: "Collections", active: false },
  { id: "offers", label: "Offers/Bids", mobileLabel: "Bids", active: false },
];

/* interface CollectionTabsProps {
  userAddress?: string;
  isOwner?: boolean;
} */

export default function CollectionTabs() {
  const activeTab = useSearchParams().get("tab") || "owned";

  return (
    <div className="w-full max-w-[1420px] mx-auto bg-[#101213] backdrop-blur-sm px-4 sm:px-6">
      <div className="border-b border-white/10">
        <div className="flex space-x-0 lg:space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/profile?tab=${tab.id}`}
              className={`flex-1 lg:flex-none text-center py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-white border-white"
                  : "text-gray-400 border-transparent hover:text-gray-300"
              }`}
            >
              <span className="lg:hidden">{tab.mobileLabel}</span>
              <span className="hidden lg:inline">{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-6">
        {activeTab === "owned" && (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <NftViewer mockNFTs={profileMockNFTs} />
          </Suspense>
        )}
        {activeTab === "created" && (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <NftViewer mockNFTs={profileMockNFTs} />
          </Suspense>
        )}
        {activeTab === "activity" && (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <ActivityTab collectionId={"mock-collection-id"} isActive={true} />
          </Suspense>
        )}
        {activeTab === "collections" && (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <ProfileCollectionsGrid />
          </Suspense>
        )}
        {activeTab === "offers" && (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <NftViewer mockNFTs={profileMockNFTs} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
