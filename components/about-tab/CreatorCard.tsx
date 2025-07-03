import { CreatorProfile } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export function CreatorCard(creator: CreatorProfile) {
  return (
    <>
      <Image
        src={creator.avatar}
        alt={`${creator.name}'s avatar`}
        className="rounded-full object-contain"
        width={45}
        height={45}
      />
      <Link
        className="font-medium text-lg hover:text-purple hover:transition-all"
        href={creator.profileUrl!}
      >
        {creator.name}
      </Link>
    </>
  )
}
