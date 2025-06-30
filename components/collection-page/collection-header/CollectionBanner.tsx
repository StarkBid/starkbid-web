import React from 'react';



const CollectionBanner= () => {
  return (
    <div className="h-64 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/collectionBg.png")`,
        }}
      />
      
      {/* Fallback gradient if image fails to load */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 opacity-75" />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />

    </div>
  );
};

export default CollectionBanner;