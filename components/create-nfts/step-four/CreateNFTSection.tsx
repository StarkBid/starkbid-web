/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from 'next/image'
import { Pencil } from 'lucide-react';

interface Props { data: any; onEdit: () => void; }
const CreateNFTSection: FC<Props> = ({ data, onEdit }) => (
    <section className="bg-[#1C1D1F] rounded-lg px-2 py-2.5 mb-4">
        <div className="flex justify-between items-start bg-[#29292A] rounded-lg m-1 p-3 gap-3 sm:gap-0">

            <div className="flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold text-white">
                    Create NFT
                </h2>
                <p className="text-[#8E9BAE] text-xs sm:text-sm md:text-[14px] w-[80%] md:w-[80%] mt-1 leading-relaxed">
                    Please fill in appropriate information to continue. Note that once your item is minted you will not be able to change any of its information.
                </p>
            </div>
            <button
                className="flex items-center space-x-1 text-xs sm:text-sm text-purple-400 bg-[#1C1D1F] px-2 sm:px-3 py-1.5 rounded-lg hover:bg-[#25262A] transition-colors"
                onClick={onEdit}
            >
                <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Edit</span>
            </button>
        </div>

        <div className="mt-4 sm:mt-6 mx-2 sm:mx-3 space-y-3 sm:space-y-4">
            <div className="flex justify-between sm:flex-row sm:items-start sm:gap-4">
                <span className="font-semibold text-[#8E9BAE] text-sm sm:text-base md:text-[16px] sm:min-w-fit">
                    NFT Name <span className="text-[#8C62F2]">*</span>
                </span>
                <span className="text-sm sm:text-base md:text-[16px] text-white sm:text-right sm:ml-auto">
                    {data.nftName}
                </span>
            </div>
            <div className="flex justify-between sm:flex-row sm:justify-between items-start gap-2 sm:gap-4">
                <span className="font-semibold text-[#8E9BAE] text-sm sm:text-base md:text-[16px] sm:min-w-fit">
                    Supply/Royalties <span className='text-[#8C62F2]'>*</span>
                </span>
                <span className='text-sm sm:text-base md:text-[16px] text-white sm:text-right sm:flex-1'>{data.royalties}</span>
            </div>
            <div className="flex justify-between sm:flex-row sm:justify-between items-start gap-2 sm:gap-4">
                <span className="font-semibold text-[#8E9BAE] text-sm sm:text-base md:text-[16px] sm:min-w-fit">
                    Description (optional)
                </span>
                <span className='text-sm w-[80%] sm: sm:text-base md:text-[16px] text-right text-white sm:text-right sm:flex-1'>
                    {data.description}
                </span>
                {/* <div className='text-sm sm:text-base md:text-[16px] text-white  sm:flex-1'>
                    {data.description && (
                        <p className="text-white leading-relaxed text-left">{data.description}</p>
                    )}
                </div> */}
            </div>

            <div className="mt-4 sm:mt-6 h-[282px] sm:h-[252px]">
                <Image
                    width={1310}
                    height={282}
                    src={data.previewImage}
                    alt="preview"
                    className="w-full h-full sm:h-full object-cover rounded-md"
                />
            </div>
        </div>
    </section>
);

export default CreateNFTSection;