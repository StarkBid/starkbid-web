import Image from 'next/image'

export function FeaturedArtwork({ image }: { image: string }) {
  return (
    <Image
      src={image}
      alt="Featured Artwork"
      className="rounded-[10px] object-cover"
      width={547}
      height={581}
    />
  )
}
