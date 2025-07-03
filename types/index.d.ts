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


export interface AboutTabProps {
  collection: CollectionData;
  isActive?: boolean;
}

export interface CollectionData {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  featuredImage: string;
  createdDate: string;
  creator: CreatorProfile;
  contributors?: CreatorProfile[];
  stats?: CollectionStats;
}

export interface CreatorProfile {
  id: string;
  name: string;
  handle?: string;
  avatar: string;
  role: string;
  profileUrl?: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    website?: string;
  };
}