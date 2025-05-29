/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from 'next/image'
import { Pencil } from 'lucide-react';

interface Props { data: any; onEdit: () => void; }
const CreateNFTSection: FC<Props> = ({ data, onEdit }) => (
    <section className="bg-[#1C1D1F] rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center m-2 bg-[#29292A] p-3">
            <h2 className="text-lg font-medium">Create NFT
                <p className="text-gray-400 mb-6">Please fill in appropriate information to continue. Note that once your item is <br /> minted you will not be able to change any of its information.</p> </h2>
            <button
                className="flex items-center space-x-1 text-sm text-purple-400 bg-[#1C1D1F] p-2"
                onClick={onEdit}
            >
                <Pencil className='w-4 h-4' />
                <span>Edit</span>
            </button>
        </div>
        <div className="mt-6 space-y-2">
            <p className="flex justify-between">
                <span className="font-semibold text-[#8E9BAE]">NFT Name <span className='text-[#8C62F2]'>*</span> </span>
                <span>{data.nftName}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-[#8E9BAE]">Supply/Royalties <span className='text-[#8C62F2]'>*</span> </span>
                <span>{data.royalties}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-[#8E9BAE]">Description (optional) </span>
                <span> {data.description && (
                    <p className="mt-2 text-gray-400 mb-6">{data.description}</p>
                )}</span>
            </p>

            <Image width={1310} height={282} src={data.previewImage} alt="preview" className="object-cover rounded-md" />
        </div>
    </section>
);

export default CreateNFTSection;