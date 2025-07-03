import { processRichText } from '@/utils/utils'
import { CreatorCard } from './CreatorCard'
import { CreatorProfile } from '@/types'

export function CollectionDescription({
  description,
  creator,
}: {
  description: string
  creator: CreatorProfile
}) {
  return (
    <div>
      <h2 className="font-semibold text-xl">About This Collection </h2>
      <div className="flex items-center space-x-5 my-5">
        <span className="text-ash font-semibold">Collection by</span>
        <CreatorCard {...creator} />
      </div>

      <p
        className="font-light text-lg/9 text-ash"
        dangerouslySetInnerHTML={{ __html: processRichText(description) }}
      />
    </div>
  )
}
