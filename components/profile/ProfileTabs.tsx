'use client';

import React from 'react';

export interface ProfileTabsProps {
  activeTab: 'owned items' | 'created' | 'activity' | 'collections' | 'offers/bids';
  onTabChange: (tab: ProfileTabsProps['activeTab']) => void;
}

const tabs: { key: ProfileTabsProps['activeTab']; label: string }[] = [
  { key: 'owned items', label: 'Owned Items' },
  { key: 'created', label: 'Created' },
  { key: 'activity', label: 'Activity' },
  { key: 'collections', label: 'Collections' },
  { key: 'offers/bids', label: 'Offers/Bids' },
];

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-700">
      <nav className="flex overflow-x-auto no-scrollbar whitespace-nowrap px-2 sm:px-4 gap-4 sm:gap-6">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`pb-2 text-base sm:text-lg font-sans transition-colors shrink-0 ${
              activeTab === tab.key
                ? 'text-white border-b-2 border-purple-500'
                : 'text-[#8E9BAE] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileTabs;
