"use client"
import React, { useState } from 'react';
import CollectionHeader from '@/components/collection-page/CollectionHeader';
import CollectionStats from '@/components/collection-page/CollectionStats';
import CollectionTabs from '@/components/collection-page/CollectionTabs';
import FilterBar from '@/components/collection-page/FilterBar/FilterBar';
import NFTGrid from '@/components/collection-page/NFTGrid';
import Footer from '@/components/landing-page/Footer';
import Navbar from '@/components/landing-page/Navbar';


const CollectionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recently Listed');

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <Navbar/>
      <CollectionHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <CollectionStats />
      </div>
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-28">
        
        <CollectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <NFTGrid />
      </div>
      <Footer/>
    </div>
  );
};

export default CollectionPage;