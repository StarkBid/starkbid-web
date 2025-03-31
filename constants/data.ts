export interface NFTCardProps {
  id: number;
  title: string;
  creatorName: string;
  creatorIcon: string;
  isVerified: boolean;
  currentBid: number;
  likes: number;
  minted: number;
  timeLeft: string;
  image: string;
}

export const nftData: NFTCardProps[] = [
  {
    id: 1,
    title: "The Pink-Blackened Horned Knight",
    creatorName: "Jacksonito",
    creatorIcon: "icon1.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "1.png"
  },
  {
    id: 2,
    title: "Relax & Breath",
    creatorName: "Bitogadick",
    creatorIcon: "icon2.png",
    isVerified: false,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "2.png"
  },
  {
    id: 3,
    title: "Running Time",
    creatorName: "Mickyvandy",
    creatorIcon: "icon3.png",
    isVerified: true,
    currentBid: 0.745,
    likes: 24,
    minted: 2,
    timeLeft: "4d 9h left",
    image: "3.png"
  },
  {
    id: 4,
    title: "Yellow Weather",
    creatorName: "Karhty26",
    creatorIcon: "icon4.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "4.png"
  },
  {
    id: 5,
    title: "Space 101",
    creatorName: "Fame Static",
    creatorIcon: "icon5.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "5.png"
  },
  {
    id: 6,
    title: "Cool Fever",
    creatorName: "Ella Walker",
    creatorIcon: "icon6.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "6.png"
  },
  {
    id: 7,
    title: "Mood Of Staces",
    creatorName: "Hades KM",
    creatorIcon: "icon7.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "7.png"
  },
  {
    id: 8,
    title: "The Seal Man",
    creatorName: "Olushola",
    creatorIcon: "icon8.png",
    isVerified: true,
    currentBid: 0.956,
    likes: 564,
    minted: 24,
    timeLeft: "1d 9h left",
    image: "8.png"
  },
];

  
  export const trendingCollections = [
    {
      id: 1,
      name: 'Xenos',
      icon: '/collections_icons/xenos.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '+20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 2,
      name: 'Bored Apes',
      icon: '/collections_icons/bored_ape.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 3,
      name: 'Monalissa',
      icon: '/collections_icons/monalisa.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 4,
      name: 'Bad Bunniez',
      icon: '/collections_icons/bad_bunniez.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 5,
      name: 'Mickymore',
      icon: '/collections_icons/micky_moore.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '+20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 6,
      name: 'Zam Califoral',
      icon: '/collections_icons/zain_califoral.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 7,
      name: 'The Vagaaburn',
      icon: '/collections_icons/the_vagaaburn.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '+20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 8,
      name: 'Bullies',
      icon: '/collections_icons/bullies.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '+20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 9,
      name: 'Dan Xylym',
      icon: '/collections_icons/Dan_xylym.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    },
    {
      id: 10,
      name: 'Net Dream',
      icon: '/collections_icons/netDream.svg',
      floorPrice: '35 ETH',
      volume: '200 ETH',
      topOffer: '31 ETH',
      change: '-20.40%',
      sales: 150,
      totalVolume: '456.00k',
      holder: 45,
      rate:'2065/1498'
    }
  ];
  

export interface ArticleProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const articleData: ArticleProps[] = [
  {
    id: 1,
    title: "The Future of NFT Auctions on Starknet",
    description: "Discover how StarkBid is transforming the NFT auction space with Starknet's Layer-2 technology.",
    imageUrl: "blog1.png"
  },
  {
    id: 2,
    title: "Exclusive Interview with Top NFT Creators",
    description: "Meet renowned artists and creators who are launching their NFTs on StarkBid.",
    imageUrl: "blog2.png"
  },
  {
    id: 3,
    title: "How StarkBid Ensures Transparent & Secure Bidding",
    description: "A deep dive into our fair bidding system, smart contract security, and low-fee transactions.",
    imageUrl: "blog3.png"
  }
];