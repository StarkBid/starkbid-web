export interface Collection {
  id: string;
  name: string;
  bannerImage: string;
  profileImage: string;
  isVerified: boolean;
  owners: number;
  totalVolume: string;
  description?: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface CollectionsFilterState {
  sortFilter: string;
  searchTerm: string;
}

export const mockCollections: Collection[] = [
  {
    id: "6",
    name: "Cyber Vision",
    bannerImage: "/nft1.png",
    profileImage: "/cyber-vision.png",
    isVerified: true,
    owners: 35,
    totalVolume: "0.287",
  },
  {
    id: "5",
    name: "MonkeyMan (もりうさ)",
    bannerImage: "/collectionBg.png",
    profileImage: "/collection3.png",
    isVerified: true,
    owners: 125,
    totalVolume: "112.2",
  },
  {
    id: "4",
    name: "Ocean Wavers",
    bannerImage: "/frank_ocean.png",
    profileImage: "/wavers.png",
    isVerified: true,
    owners: 90,
    totalVolume: "0.287",
  },
  {
    id: "3",
    name: "Killan Avengers",
    bannerImage: "/killian.png",
    profileImage: "/killian-avengers.png",
    isVerified: true,
    owners: 305,
    totalVolume: "0.287",
  },
];

export const sortOptions: SortOption[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "last_week", label: "Last Week" },
  { value: "volume_high", label: "Highest Volume" },
  { value: "volume_low", label: "Lowest Volume" },
];

// Add loading and error states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
