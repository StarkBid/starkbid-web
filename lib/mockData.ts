import { NFT } from '../components/profile/NFTCard/NFTCard.types';
import { getRandomMarketplace } from '@/lib/utils';

export const profileMockNFTs: NFT[] = [
  {
    id: '1',
    tokenId: '001',
    name: 'Abstract Vibe',
    description: 'A vibrant abstract piece exploring digital energies.',
    image: '/nft1.png',
    collection: { id: 'coll1', name: 'Vibrant Art', slug: 'vibrant-art', marketplace: getRandomMarketplace() },
    price: { eth: '0.08', usd: '200.00' },
    creator: { address: '0xcreator1', username: 'ArtisticMind' },
    stats: { viewCount: 120, likeCount: 45, shareCount: 10 },
    lastSale: { price: '0.07', date: new Date('2025-06-20T10:00:00Z'), buyer: '0xbuyer1' },
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-06-25T12:00:00Z'),
    status: 'sold',
    traits: { color: 'Blue', style: 'Abstract', background: 'Light' },
  },
  {
    id: '2',
    tokenId: '002',
    name: 'Cyberpunk City',
    description: 'Neon-lit streets of a futuristic metropolis.',
    image: '/nft2.png',
    collection: { id: 'coll2', name: 'Neon Dreams', slug: 'neon-dreams', marketplace: getRandomMarketplace() },
    price: { eth: '0.15', usd: '375.00' },
    creator: { address: '0xcreator2', username: 'PixelArtist' },
    stats: { viewCount: 300, likeCount: 90, shareCount: 25 },
    lastSale: undefined, // No last sale for this one
    createdAt: new Date('2024-12-15T14:30:00Z'),
    updatedAt: new Date('2025-06-26T09:00:00Z'),
    status: 'active',
    traits: { color: 'Blue', style: 'Abstract', background: 'Dark' },
  },
  {
    id: '3',
    tokenId: '003',
    name: 'Mystic Forest',
    description: 'An enchanted forest scene with ancient trees.',
    image: '/nft3.png',
    collection: { id: 'coll3', name: 'Nature Echoes', slug: 'nature-echoes', marketplace: getRandomMarketplace() },
    price: { eth: '0.05', usd: '125.00' },
    creator: { address: '0xcreator3', username: 'GreenThumb' },
    stats: { viewCount: 80, likeCount: 20, shareCount: 5 },
    lastSale: { price: '0.04', date: new Date('2025-05-10T08:00:00Z'), buyer: '0xbuyer2' },
    createdAt: new Date('2025-02-20T08:00:00Z'),
    updatedAt: new Date('2025-06-24T15:00:00Z'),
    status: 'sold',
    traits: { color: 'Green', style: 'Nature', background: 'Light' },
  },
  {
    id: '4',
    tokenId: '004',
    name: 'Digital Portrait',
    description: 'A contemporary digital portrait with expressive features.',
    image: '/nft4.png',
    collection: { id: 'coll4', name: 'Humanity AI', slug: 'humanity-ai', marketplace: getRandomMarketplace() },
    price: { eth: '0.10', usd: '250.00' },
    creator: { address: '0xcreator4', username: 'Portraiter' },
    stats: { viewCount: 250, likeCount: 70, shareCount: 18 },
    lastSale: undefined,
    createdAt: new Date('2025-01-25T11:00:00Z'),
    updatedAt: new Date('2025-06-27T10:00:00Z'),
    status: 'active',
    traits: { color: 'Blue', style: 'Portrait', background: 'Light' },
  },
  {
    id: '5',
    tokenId: '005',
    name: 'Geometric Abstraction',
    description: 'Complex patterns and vibrant colors in a geometric style.',
    image: '/nft1.png',
    collection: { id: 'coll5', name: 'Form & Color', slug: 'form-color', marketplace: getRandomMarketplace() },
    price: { eth: '0.07', usd: '175.00' },
    creator: { address: '0xcreator5', username: 'ShapeMaster' },
    stats: { viewCount: 150, likeCount: 50, shareCount: 12 },
    lastSale: { price: '0.06', date: new Date('2025-06-01T09:00:00Z'), buyer: '0xbuyer3' },
    createdAt: new Date('2024-11-01T09:00:00Z'),
    updatedAt: new Date('2025-06-23T11:00:00Z'),
    status: 'sold',
    traits: { color: 'Red', style: 'Abstract', background: 'Dark' },
  },
  {
    id: '6',
    tokenId: '006',
    name: 'Space Explorer',
    description: 'A lone astronaut drifting through a nebula.',
    image: '/nft.png',
    collection: { id: 'coll6', name: 'Cosmic Journeys', slug: 'cosmic-journeys', marketplace: getRandomMarketplace() },
    price: { eth: '0.20', usd: '500.00' },
    creator: { address: '0xcreator6', username: 'StarGazer' },
    stats: { viewCount: 400, likeCount: 120, shareCount: 30 },
    lastSale: undefined,
    createdAt: new Date('2025-03-10T16:00:00Z'),
    updatedAt: new Date('2025-06-27T08:00:00Z'),
    status: 'active',
    traits: { color: 'Blue', style: 'Sci-Fi', background: 'Dark' },
  },
  {
    id: '7',
    tokenId: '007',
    name: 'Pixel Art Dragon',
    description: 'A majestic dragon rendered in classic pixel art style.',
    image: '/nft4.png',
    collection: { id: 'coll7', name: 'Retro Gaming', slug: 'retro-gaming', marketplace: getRandomMarketplace() },
    price: { eth: '0.03', usd: '75.00' },
    creator: { address: '0xcreator7', username: '8BitKing' },
    stats: { viewCount: 60, likeCount: 15, shareCount: 3 },
    lastSale: { price: '0.02', date: new Date('2025-04-15T10:00:00Z'), buyer: '0xbuyer4' },
    createdAt: new Date('2024-10-20T10:00:00Z'),
    updatedAt: new Date('2025-06-22T14:00:00Z'),
    status: 'sold',
    traits: { color: 'Red', style: 'Pixel Art', background: 'Light' },
  },
  {
    id: '8',
    tokenId: '008',
    name: 'Ocean Depths',
    description: 'A serene view into the mysterious deep ocean.',
    image: '/nft3.png',
    collection: { id: 'coll8', name: 'Aqua Realms', slug: 'aqua-realms', marketplace: getRandomMarketplace() },
    price: { eth: '0.12', usd: '300.00' },
    creator: { address: '0xcreator8', username: 'DeepBlue' },
    stats: { viewCount: 200, likeCount: 60, shareCount: 15 },
    lastSale: undefined,
    createdAt: new Date('2025-04-05T13:00:00Z'),
    updatedAt: new Date('2025-06-27T11:00:00Z'),
    status: 'active',
    traits: { color: 'Blue', style: 'Nature', background: 'Light' },
  },
  {
    id: '9',
    tokenId: '009',
    name: 'Desert Oasis',
    description: 'A hidden haven in the vast desert.',
    image: '/nft1.png',
    collection: { id: 'coll9', name: 'Arid Lands', slug: 'arid-lands', marketplace: getRandomMarketplace() },
    price: { eth: '0.09', usd: '225.00' },
    creator: { address: '0xcreator9', username: 'SandArtist' },
    stats: { viewCount: 110, likeCount: 30, shareCount: 8 },
    lastSale: { price: '0.08', date: new Date('2025-06-18T11:00:00Z'), buyer: '0xbuyer5' },
    createdAt: new Date('2025-01-10T11:00:00Z'),
    updatedAt: new Date('2025-06-21T13:00:00Z'),
    status: 'sold',
    traits: { color: 'Yellow', style: 'Nature', background: 'Light' },
  },
  {
    id: '10',
    tokenId: '010',
    name: 'Mountain Peak',
    description: 'The majestic view from a snow-capped mountain.',
    image: '/nft4.png',
    collection: { id: 'coll10', name: 'Summit Views', slug: 'summit-views', marketplace: getRandomMarketplace() },
    price: { eth: '0.18', usd: '450.00' },
    creator: { address: '0xcreator10', username: 'HighClimber' },
    stats: { viewCount: 350, likeCount: 100, shareCount: 28 },
    lastSale: undefined,
    createdAt: new Date('2024-12-01T09:00:00Z'),
    updatedAt: new Date('2025-06-27T09:30:00Z'),
    status: 'active',
    traits: { color: 'Blue', style: 'Nature', background: 'Dark' },
  },
  {
    id: '11',
    tokenId: '011',
    name: 'City Lights',
    description: 'A dazzling cityscape at night.',
    image: '/nft.png',
    collection: { id: 'coll11', name: 'Urban Life', slug: 'urban-life', marketplace: getRandomMarketplace() },
    price: { eth: '0.11', usd: '275.00' },
    creator: { address: '0xcreator11', username: 'NightCrawler' },
    stats: { viewCount: 280, likeCount: 85, shareCount: 20 },
    lastSale: { price: '0.10', date: new Date('2025-06-15T14:00:00Z'), buyer: '0xbuyer6' },
    createdAt: new Date('2025-02-05T14:00:00Z'),
    updatedAt: new Date('2025-06-20T16:00:00Z'),
    status: 'sold',
    traits: { location: 'City', time: 'Night' },
  },
  {
    id: '12',
    tokenId: '012',
    name: 'Abstract Forms',
    description: 'Playful and colorful abstract shapes.',
    image: '/nft1.png',
    collection: { id: 'coll12', name: 'Modern Art', slug: 'modern-art', marketplace: getRandomMarketplace() },
    price: { eth: '0.06', usd: '150.00' },
    creator: { address: '0xcreator12', username: 'FormSculptor' },
    stats: { viewCount: 90, likeCount: 25, shareCount: 7 },
    lastSale: undefined,
    createdAt: new Date('2024-11-20T10:00:00Z'),
    updatedAt: new Date('2025-06-27T07:00:00Z'),
    status: 'active',
    traits: { style: 'Abstract', color: 'Vibrant' },
  },
];

export const collectionMockNFTs: NFT[] = [
  {
    id: "1",
    tokenId: "001",
    name: "Monkey Megga Mind",
    description: "A unique monkey character with extraordinary mental abilities.",
    image: "/collection2.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.059', usd: '147.50' },
    creator: { address: '0xmonkey1', username: 'MonkeyCreator' },
    stats: { viewCount: 1200, likeCount: 626, shareCount: 45 },
    lastSale: { price: '0.059', date: new Date('2025-06-20T10:00:00Z'), buyer: '0xbuyer1' },
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-06-25T12:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Legendary', background: 'Blue' },
  },
  {
    id: "2",
    tokenId: "002",
    name: "Monkey On The Moon",
    description: "A brave monkey exploring the lunar surface.",
    image: "/collection3.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.045', usd: '112.50' },
    creator: { address: '0xmonkey2', username: 'SpaceMonkey' },
    stats: { viewCount: 800, likeCount: 423, shareCount: 28 },
    lastSale: undefined,
    createdAt: new Date('2024-12-15T14:30:00Z'),
    updatedAt: new Date('2025-06-26T09:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Rare', background: 'Gray' },
  },
  {
    id: "3",
    tokenId: "003",
    name: "Monkey Mood",
    description: "A monkey expressing deep emotional states.",
    image: "/collection4.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.067', usd: '167.50' },
    creator: { address: '0xmonkey3', username: 'EmotionMonkey' },
    stats: { viewCount: 1500, likeCount: 789, shareCount: 67 },
    lastSale: { price: '0.065', date: new Date('2025-05-10T08:00:00Z'), buyer: '0xbuyer2' },
    createdAt: new Date('2025-02-20T08:00:00Z'),
    updatedAt: new Date('2025-06-24T15:00:00Z'),
    status: 'sold',
    traits: { character: '🐵', rarity: 'Epic', background: 'Red' },
  },
  {
    id: "4",
    tokenId: "004",
    name: "Monkey Mode",
    description: "A monkey in its most powerful form.",
    image: "/collection5.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.052', usd: '130.00' },
    creator: { address: '0xmonkey4', username: 'PowerMonkey' },
    stats: { viewCount: 600, likeCount: 341, shareCount: 22 },
    lastSale: undefined,
    createdAt: new Date('2025-01-25T11:00:00Z'),
    updatedAt: new Date('2025-06-27T10:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Common', background: 'Orange' },
  },
  {
    id: "5",
    tokenId: "005",
    name: "Monkey Mode",
    description: "Another variation of the powerful monkey mode.",
    image: "/collection6.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.078', usd: '195.00' },
    creator: { address: '0xmonkey5', username: 'ModeMonkey' },
    stats: { viewCount: 1800, likeCount: 892, shareCount: 89 },
    lastSale: { price: '0.075', date: new Date('2025-06-01T09:00:00Z'), buyer: '0xbuyer3' },
    createdAt: new Date('2024-11-01T09:00:00Z'),
    updatedAt: new Date('2025-06-23T11:00:00Z'),
    status: 'sold',
    traits: { character: '🐵', rarity: 'Legendary', background: 'Pink' },
  },
  {
    id: "6",
    tokenId: "006",
    name: "Monkey Mode",
    description: "A stealthy monkey in shadow mode.",
    image: "/collection7.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.041', usd: '102.50' },
    creator: { address: '0xmonkey6', username: 'ShadowMonkey' },
    stats: { viewCount: 500, likeCount: 256, shareCount: 15 },
    lastSale: undefined,
    createdAt: new Date('2025-03-10T16:00:00Z'),
    updatedAt: new Date('2025-06-27T08:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Rare', background: 'Purple' },
  },
  {
    id: "7",
    tokenId: "007",
    name: "Monkey Mode",
    description: "A royal monkey with majestic presence.",
    image: "/collection8.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.063', usd: '157.50' },
    creator: { address: '0xmonkey7', username: 'RoyalMonkey' },
    stats: { viewCount: 1000, likeCount: 567, shareCount: 34 },
    lastSale: undefined,
    createdAt: new Date('2024-10-20T10:00:00Z'),
    updatedAt: new Date('2025-06-22T14:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Epic', background: 'Purple' },
  },
  {
    id: "8",
    tokenId: "008",
    name: "Monkey Mode",
    description: "A nature-loving monkey in harmony with the environment.",
    image: "/collection2.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.055', usd: '137.50' },
    creator: { address: '0xmonkey8', username: 'NatureMonkey' },
    stats: { viewCount: 900, likeCount: 445, shareCount: 31 },
    lastSale: undefined,
    createdAt: new Date('2025-04-05T13:00:00Z'),
    updatedAt: new Date('2025-06-27T11:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Common', background: 'Green' },
  },
  {
    id: "9",
    tokenId: "009",
    name: "Monkey Mode",
    description: "A futuristic monkey with cyber enhancements.",
    image: "/collection10.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.072', usd: '180.00' },
    creator: { address: '0xmonkey9', username: 'CyberMonkey' },
    stats: { viewCount: 1300, likeCount: 712, shareCount: 56 },
    lastSale: undefined,
    createdAt: new Date('2025-01-10T11:00:00Z'),
    updatedAt: new Date('2025-06-21T13:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Epic', background: 'Cyan' },
  },
  {
    id: "10",
    tokenId: "010",
    name: "Monkey Mode",
    description: "A cheerful monkey spreading joy and happiness.",
    image: "/collection1.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.048', usd: '120.00' },
    creator: { address: '0xmonkey10', username: 'JoyMonkey' },
    stats: { viewCount: 700, likeCount: 334, shareCount: 19 },
    lastSale: undefined,
    createdAt: new Date('2024-12-01T09:00:00Z'),
    updatedAt: new Date('2025-06-27T09:30:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Common', background: 'Yellow' },
  },
  {
    id: "11",
    tokenId: "011",
    name: "Monkey Mode",
    description: "A wise monkey with ancient knowledge.",
    image: "/collection12.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.066', usd: '165.00' },
    creator: { address: '0xmonkey11', username: 'WiseMonkey' },
    stats: { viewCount: 1100, likeCount: 678, shareCount: 42 },
    lastSale: { price: '0.064', date: new Date('2025-06-15T14:00:00Z'), buyer: '0xbuyer6' },
    createdAt: new Date('2025-02-05T14:00:00Z'),
    updatedAt: new Date('2025-06-20T16:00:00Z'),
    status: 'sold',
    traits: { character: '🐵', rarity: 'Epic', background: 'Gray' },
  },
  {
    id: "12",
    tokenId: "012",
    name: "Monkey Mode",
    description: "A warrior monkey ready for battle.",
    image: "/collection13.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.053', usd: '132.50' },
    creator: { address: '0xmonkey12', username: 'WarriorMonkey' },
    stats: { viewCount: 750, likeCount: 389, shareCount: 25 },
    lastSale: undefined,
    createdAt: new Date('2024-11-20T10:00:00Z'),
    updatedAt: new Date('2025-06-27T07:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Rare', background: 'Orange' },
  },
  {
    id: "13",
    tokenId: "013",
    name: "Monkey Mode",
    description: "A mystical monkey with magical powers.",
    image: "/collection14.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.074', usd: '185.00' },
    creator: { address: '0xmonkey13', username: 'MagicMonkey' },
    stats: { viewCount: 1600, likeCount: 823, shareCount: 78 },
    lastSale: undefined,
    createdAt: new Date('2025-03-10T16:00:00Z'),
    updatedAt: new Date('2025-06-27T08:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Legendary', background: 'Purple' },
  },
  {
    id: "14",
    tokenId: "014",
    name: "Monkey Mode",
    description: "A peaceful monkey meditating in nature.",
    image: "/collection15.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.061', usd: '152.50' },
    creator: { address: '0xmonkey14', username: 'PeaceMonkey' },
    stats: { viewCount: 950, likeCount: 456, shareCount: 29 },
    lastSale: undefined,
    createdAt: new Date('2024-10-20T10:00:00Z'),
    updatedAt: new Date('2025-06-22T14:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Rare', background: 'Green' },
  },
  {
    id: "15",
    tokenId: "015",
    name: "Monkey Mode",
    description: "A playful monkey enjoying life to the fullest.",
    image: "/collection4.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.049', usd: '122.50' },
    creator: { address: '0xmonkey15', username: 'PlayfulMonkey' },
    stats: { viewCount: 450, likeCount: 234, shareCount: 12 },
    lastSale: undefined,
    createdAt: new Date('2025-04-05T13:00:00Z'),
    updatedAt: new Date('2025-06-27T11:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Common', background: 'Teal' },
  },
  {
    id: "16",
    tokenId: "016",
    name: "Monkey Mode",
    description: "A legendary monkey with golden aura.",
    image: "/collection1.png",
    collection: { id: 'monkey-collection', name: 'Monkey Collection', slug: 'monkey-collection', marketplace: getRandomMarketplace() },
    price: { eth: '0.058', usd: '145.00' },
    creator: { address: '0xmonkey16', username: 'GoldenMonkey' },
    stats: { viewCount: 1200, likeCount: 567, shareCount: 38 },
    lastSale: undefined,
    createdAt: new Date('2025-01-10T11:00:00Z'),
    updatedAt: new Date('2025-06-21T13:00:00Z'),
    status: 'active',
    traits: { character: '🐵', rarity: 'Epic', background: 'Yellow' },
  },
];

export const mockNFTs = collectionMockNFTs;