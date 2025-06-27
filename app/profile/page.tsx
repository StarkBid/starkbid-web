'use client';

import React, { useState } from 'react';
import ProfileTabs from '@/components/profile/ProfileTabs';
import CreatedTab from '@/components/profile/CreatedTab/CreatedTab';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'owned items' | 'created' | 'activity' | 'collections' | 'offers/bids'>('owned items');

  const userProfile = {
    address: '0x9d863ed03...3ba8',
    username: 'Cattie Negtar',
    avatarUrl: '/profileimage.png',
    verified: true,
    bio: 'This would contain a short bio about Cattie Negtar. Carvings that tell the stories of ancestors long past. Every ancient story from. The peace, blackened horned knight is an embodiment of peace, unity and strength. Striking look of intricate carvings that tell the stories of ancestors long past. Every ancient story from. A brand for the metaverse. Built by the community.',
    stats: {
      totalValueEth: '0.30',
      totalValueUsd: '750.44',
      ownedCount: 25,
      createdCount: 0,
      collectionsCount: 4,
    },
    social: {
      twitter: '#',
      instagram: '#',
      discord: '#',
      website: '#',
    },
    dateJoined: 'May 15, 2025',
  };

  const isOwner = true; 

  return (
    <div className="bg-[#101213] min-h-screen">
      <div className="mx-auto px-8 py-8">
        
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-8">
          {activeTab === 'owned items' && (
            <div className="text-gray-400">
              ...
            </div>
          )}
          {activeTab === 'created' && (
            <div className="text-gray-400">
            <CreatedTab 
              isOwner={isOwner} 
              userAddress={userProfile.address} 
            />
          </div>
          )} 
          
          {activeTab === 'activity' && (
            <div className="">
            ...
          </div>
          )}
          {activeTab === 'collections' && (
            <div className="">
             ...
            </div>
          )}
          {activeTab === 'offers/bids' && (
            <div className=""> 
              ...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;