import React from 'react';
// import CollectionBanner from './CollectionBanner';
// import CollectionProfile from './CollectionProfile';
// import SocialLinks from './SocialLinks';
import CollectionBanner from './collection-header/CollectionBanner';
import CollectionProfile from './collection-header/CollectionProfile';
import SocialLinks from './collection-header/SocialLinks';



const CollectionHeader = () => {
  return (
    <div className="relative">
      <CollectionBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 flex flex-col justify-center items-center space-x-6">
          <CollectionProfile />
          <div className="flex-1 pt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;