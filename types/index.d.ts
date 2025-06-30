export interface TrendingCardProps {
    name: string;
    image: string;
    floorPrice: string;
    totalVolume: string;
  }

export interface Collection {
  name: string;
  description: string;
  bannerImage?: string;
  profileImage?: string;
  verified: boolean;
  stats: {
    totalVolume: string;
    floorPrice: string;
    bestOffer: string;
    listed: string;
    owners: string;
  };
  socialLinks: {
    website?: string;
    discord?: string;
    twitter?: string;
  };
}