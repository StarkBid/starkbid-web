export interface MintInfo {
    totalMinted: number;
    maxSupply?: number;
    mintDate: Date;
  }
  
  export interface NFT {
    id: string;
    tokenId: string;
    name: string;
    description?: string;
    image: string;
    collection: {
      id: string;
      name: string;
      slug: string;
      isVerified?: boolean;
    };
    price: {
      eth: string;
      usd: string;
    };
    creator: {
      address: string;
      username?: string;
      avatar?: string;
    };
    stats: {
      viewCount: number;
      likeCount: number;
      shareCount: number;
    };
    lastSale?: {
      price: string;
      date: Date;
      buyer: string;
    };
    createdAt: Date;
    updatedAt: Date;
    status: 'active' | 'sold' | 'transferred';
    traits?: {
      [key: string]: string;
    };
    mintInfo?: MintInfo;
  }
  
  export interface NFTCardProps {
    nft: NFT;
    onClick?: (nft: NFT) => void;
  }