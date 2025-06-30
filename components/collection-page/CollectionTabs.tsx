import React from 'react';

interface CollectionTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CollectionTabs: React.FC<CollectionTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['Items', 'About', 'Activity', "Owner"];

  return (
    <div className="border-b border-gray-800 mb-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 border-b-2 font-medium text-xl transition-colors ${
              activeTab === tab
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CollectionTabs;