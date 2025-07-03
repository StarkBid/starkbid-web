import { NFT } from '../NFTCard/NFTCard.types';

export interface NFTGridProps {
  items: NFT[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  onLoadMore: () => void;
  emptyState: {
    title: string;
    description: string;
  };
  gridColsClass?: string;
}

export interface NFTGridConfig {
  columns: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  gap: number;
}