export interface CreatedFiltersState {
    searchTerm: string;
    sortBy: 'newest' | 'oldest' | 'price_low' | 'price_high' | 'most_viewed';
    priceRange: {
        min: number | null;
        max: number | null;
    };
    collections: string[];
    status: 'all' | 'active' | 'sold';
    blockchain: 'all' | 'ethereum' | 'starknet';
}