export interface CreatedFiltersState {
    searchTerm: string;
    sortBy: 'newest' | 'oldest' | 'price_low' | 'price_high' | 'most_viewed';
    priceRange: {
        min: number | null;
        max: number | null;
    };
    collections: string[];
    status: 'all' | 'active' | 'sold' | 'live auction' | 'buy now';
    blockchain: 'all' | 'ethereum' | 'starknet';
    marketplaces?: {
        marketPlace?: boolean;
        search?: boolean;
        startBid?: boolean;
        openSea?: boolean;
        sudoSwap?: boolean;
        rarible?: boolean;
    };
    collectionSort?: 'minToMax' | 'maxToMin' | 'default';
    traits?: {
        [key: string]: string[];
    };
}

export interface FilterDropdownProps {
    filters: CreatedFiltersState;
    onChange: (newFilters: CreatedFiltersState) => void;
    isOwner: boolean;
}

export interface PriceDropdownProps {
    value: string;
    onChange: (value: string) => void;
}