import Image from 'next/image'
import { CollectionData, CreatorProfile } from '@/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CreatorProfiles(profile: CollectionData) {
  return (
    <div className="flex max-sm:flex-col items-center gap-[22px]">
      {profile.contributors!.map((creator) => (
        <Profile key={creator.id} {...creator} />
      ))}
      <ArrowRight className="size-4 text-ash" />
      <Profile {...profile.creator} />
    </div>
  )
}

function Profile(profile: CreatorProfile) {
  return (
    <div className="flex items-center space-x-5">
      <Image
        src={profile.avatar || '/new_owner.png'}
        alt={`${profile.name}'s avatar`}
        className="rounded-full object-contain"
        width={55}
        height={55}
      />
      <div>
        <Link
          className="font-medium text-lg block hover:text-purple hover:transition-all"
          href={profile.profileUrl!}
        >
          {profile.name}
        </Link>
        <span className="text-ash font-semibold">{profile.role}</span>
      </div>
    </div>
  )
}
