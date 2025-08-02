'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BackButton from '@/components/create-nfts/common/BackButton';
import ProgressBar from '@/components/create-nfts/common/ProgressBar';
import ConfirmationModal from '@/components/create-nfts/common/modal/ConfirmationModal';
import ChooseBlockchainSection from '@/components/create-nfts/step-four/ChooseBlockchainSection';
import CreateNFTSection from '@/components/create-nfts/step-four/CreateNFTSection';
import AddToCollectionSection from '@/components/create-nfts/step-four/AddToCollectionSection';
import SubmittingLoader from '@/components/create-nfts/step-four/SubmittingLoader';
import { motion } from 'framer-motion';

export default function StepFourPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formData = {
    blockchain: 'Ethereum',
    wallet: '352By…fc76',
    nftName: 'Jack Hardy',
    royalties: '56%',
    previewImage: '/image.png',
    description: 'Gravity Shakers is a collection of excellent and magnificent artworks from creative designers and artists around the world.',
    collection: {
      id: '1837329290',
      name: 'Gravity Shakers',
      thumbnail: '/image1.png',
       description: 'Gravity Shakers is a collection of excellent and magnificent artworks from creative designers and artists around the world.',
      link: 'starkbid/uaywetwy.com',
    },
  };

  const handleEdit = (step: string) => {
    router.push(`/create-nfts/step-${step}`);
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  const submitData = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Final data:', formData);
      // navigate to success or next page
      router.push('/create-nfts/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 pb-6 sm:pb-8 md:pb-10">
        <div className="mb-4 sm:mb-6">
          <ProgressBar currentStep={4} totalSteps={0} />
        </div>
        
        <div className="mb-4 sm:mb-6">
          <BackButton className="text-sm sm:text-base" />
        </div>
        
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mb-2 sm:mb-3 text-white">
            Final Review
          </h1>
          <p className="text-sm sm:text-base text-[#8E9BAE] leading-relaxed">
            Please ensure every information is correct before proceeding
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <ChooseBlockchainSection data={formData} onEdit={() => handleEdit('one')} />
          <CreateNFTSection data={formData} onEdit={() => handleEdit('two')} />
          <AddToCollectionSection data={formData} onEdit={() => handleEdit('three')} />
        </div>

        <motion.button
          className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-[#8C62F2] text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base font-medium min-h-[44px] sm:min-h-[48px]"
          onClick={handleConfirm}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>

        {showModal && (
          <ConfirmationModal
            title="Confirm Mint"
            description="Are you sure you want to mint this NFT? Once submitted, metadata is immutable."
            onCancel={() => setShowModal(false)}
            onConfirm={submitData}
          />
        )}
        {isSubmitting && <SubmittingLoader />}
      </div>
    </div>
  );
}