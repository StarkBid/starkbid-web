import NftBid from "./components/NFTDetail";
import NFTCollectionSection from "./components/nft_collection_card_data";

const AuctionPage = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-4">
            <NftBid/>
            <NFTCollectionSection />
        </div>
     );
}

export default AuctionPage;
