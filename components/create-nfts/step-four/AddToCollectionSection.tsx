/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from "next/image";
import { Pencil, Dot } from 'lucide-react';

interface Props { data: any; onEdit: () => void; }
const AddToCollectionSection: FC<Props> = ({ data, onEdit }) => (
  <section className="bg-[#1C1D1F] rounded-lg p-4 mb-6">
    <div className="flex justify-between items-center bg-[#29292A] rounded-lg m-1 p-3">
            <h2 className="text-lg font-medium">Add To Collection
                <p className="text-gray-400 mb-6">Please select the collection you want to add this NFT to or just create a new one.</p> </h2>
            <button
                className="flex items-center space-x-1 text-sm text-purple-400 bg-[#1C1D1F] p-2"
                onClick={onEdit}
            >
                <Pencil className='w-4 h-4' />
                <span>Edit</span>
            </button>
        </div>
    <div className="flex items-start space-x-4 mt-6">
  <Image
    width={133}
    height={90}
    src={data.collection.thumbnail}
    alt="collection thumb"
    className="w-[133px] h-[90px] rounded-md"
  />

  <div className="flex-1 flex flex-col">

    <div className="flex justify-between items-center">
      <span className="inline-flex items-center space-x-1 font-semibold">
  <span>{data.collection.name}</span>
  <Dot className="text-[#54BD48] h-[40px] w-[40px]" />
  <span>#{data.collection.id}</span>
</span>

      <span className="text-white">#{data.collection.id}</span>
    </div>
     <div className="flex justify-between items-center">
      <span className="inline-flex text-left space-x-1 font-semibold text-[#8E9BAE]">
  <span>{data.collection.description}</span>

</span>

      <span className="text-white">{data.collection.link}</span>
    </div>

  </div>
</div>

  </section>
);

export default AddToCollectionSection;