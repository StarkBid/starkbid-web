import React from 'react';
import Image from 'next/image';

const CollectionProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-x-4">
      <div className="w-32 h-32  rounded-2xl  flex items-center justify-center">
        <Image src={"/collectionProfile.png"} width={100} height={100} alt='' className='w-full h-full'/>
      </div>
      <div className="pt-6">
        <div className="flex items-center  flex-rowspace-x-2 mb-2">
          <h1 className="text-3xl font-bold">MonkeyMart (</h1> <span className='text-3xl font-bold ml-10'>)</span>
          <Image src={"/verified.png"} width={20} height={20} alt='' className='w-7 h-7 ml-3'/>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;