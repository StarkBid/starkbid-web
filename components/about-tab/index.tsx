import Image from 'next/image'
import { CreatorProfiles } from './ CreatorProfiles'
import { FeaturedArtwork } from './ FeaturedArtwork'
import { CollectionDescription } from './CollectionDescription'
import { CollectionMeta } from './CollectionMeta'
import { AboutTabProps } from '@/types'

export function AboutTab() {
  return (
    <section className="">
      <div className="flex max-md:flex-col gap-5">
        <div className="md:basis-[60%]">
          <CollectionDescription
            description={aboutInfo.collection.description}
            creator={aboutInfo.collection.creator}
          />
        </div>

        <div className="">
          <FeaturedArtwork image={aboutInfo.collection.featuredImage} />
        </div>
      </div>

      <div className="md:w-[60%]">
        <Hr />
        <CreatorProfiles {...aboutInfo.collection} />
        <Hr />
        <CollectionMeta date={aboutInfo.collection.createdDate} />
        <Hr />
      </div>

      <div className="pt-7">
        <Image
          src="/collection-about2.png"
          alt="Featured Artwork"
          className="rounded-lg object-cover"
          width={1980}
          height={581}
        />
      </div>
    </section>
  )
}

const Hr = () => <hr className="border-darkerGray my-[30px]" />

const aboutInfo: AboutTabProps = {
  collection: {
    id: '1',
    name: 'Azuki',
    description: `The pink-blackened horned knight is an embodiment of peace, unity and strength. Striking look of intricate carvings that tell the stories of ancestors long past. Every ancient story from. The pink-blackened horned knight is an embodiment of peace, unity and strength. Striking look of intricate carvings that tell the stories of ancestors long past. Every ancient story from. A brand for the metaverse. Built by the community.
Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.We rise together. 
We build together. We grow together.
Ready to take the red bean?`,
    featuredImage: '/collection-about.png',
    creator: {
      id: '1',
      name: 'Cattie Negtar',
      avatar: '/new_owner.png',
      role: 'New Owner',
      profileUrl: '#',
    },
    createdDate: '15th May 2025',
    contributors: [
      {
        id: '2',
        name: 'x0023y...yrte',
        avatar: '/creator_nft.png',
        role: 'creator',
        profileUrl: '#',
      },
    ],
  },
}
