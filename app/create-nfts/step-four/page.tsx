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
    <div className="px-6 py-8 mx-auto">
      <ProgressBar currentStep={4} totalSteps={0} />
      <BackButton className='mt-6'/>
      <h1 className="text-2xl font-semibold mb-2 mt-6">Final Review</h1>
      <p className="text-gray-400 mb-6">Please ensure every information is correct before proceeding</p>

      <ChooseBlockchainSection data={formData} onEdit={() => handleEdit('one')} />
      <CreateNFTSection data={formData} onEdit={() => handleEdit('two')} />
      <AddToCollectionSection data={formData} onEdit={() => handleEdit('three')} />

      <button
        className="w-full mt-8 py-3 bg-[#8C62F2] text-white rounded-lg hover:bg-purple-700"
        onClick={handleConfirm}
      >
        Next
      </button>

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
  );
}