// hub.config.ts — Quest Pest Control
// Everything else reads from here.

// ============================================================
// TEMPLATE METADATA
// ============================================================
export const TEMPLATE_META = {
  vertical: 'pest',
  geoLevel: 'regional-hub',
} as const;

export const BRAND = {
  name: 'Quest Pest Control',
  tagline: 'On a Quest to Eliminate Pests — Suffolk, Nassau & Queens',
  domain: 'questpest.net',
  phone: '6312284498',
  phoneFormatted: '(631) 228-4498',
  email: 'info@questpest.net',
  primaryColor: '#1A7A4C',
  secondaryColor: '#2E9A6A',
  accentColor: '#FF8C00',
  yearFounded: 2003,
  region: 'Suffolk County, Nassau County & Queens',
  webhookUrl: 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-questpest',
} as const;

// ============================================================
// LEAD CAPTURE INTENTS
// ============================================================
export const LEAD_CAPTURE_INTENTS = [
  'pest-control-near-me',
  'exterminator-near-me',
  'emergency-pest-control',
  'same-day-pest-control',
  'bed-bug-exterminator',
  'free-pest-inspection',
] as const;

export type LeadCaptureIntent = (typeof LEAD_CAPTURE_INTENTS)[number];

// ============================================================
// GMBs — add as acquired
// ============================================================
export const GMBS = [] as GMBEntry[];

// ============================================================
// REVIEWS
// ============================================================
export const REVIEWS = [
  {
    name: 'Satisfied Homeowner',
    location: 'Suffolk County, NY',
    rating: 5,
    text: "I can't express how grateful I am for Quest Pest! We had a terrible ant infestation that was driving us crazy. Their team responded quickly, identified the problem, and implemented an eco-friendly solution that worked wonders. Within days, the ants were gone, and they haven't returned in months. The technicians were professional, knowledgeable, and took the time to educate us on prevention. Highly recommend!",
  },
  {
    name: 'New Homeowner',
    location: 'Nassau County, NY',
    rating: 5,
    text: "Quest Pest is a lifesaver! We discovered termites in our newly purchased home and were devastated. The Quest team responded immediately, performed a thorough inspection, and developed a comprehensive treatment plan. They used state-of-the-art techniques to eliminate the termites and prevent future infestations. Their follow-up service is impeccable!",
  },
  {
    name: 'Property Manager',
    location: 'Queens, NY',
    rating: 5,
    text: "Managing a large apartment complex comes with its share of pest control challenges. Quest Pest has consistently exceeded our expectations. Their proactive approach, quick response times, and effective treatments have significantly reduced pest-related complaints from our tenants. The administrative staff is always helpful with scheduling and documentation. Quest Pest is an invaluable asset to our property management team!",
  },
];

// ============================================================
// REGIONS — Suffolk (primary), Nassau, Queens
// ============================================================
const SUFFOLK_TOWNS = [
  'Amityville', 'Aquebogue', 'Babylon', 'Bay Shore', 'Bayport', 'Bellport',
  'Blue Point', 'Bohemia', 'Brentwood', 'Bridgehampton', 'Brightwaters',
  'Brookhaven', 'Calverton', 'Center Moriches', 'Centereach', 'Central Islip',
  'Cold Spring Harbor', 'Commack', 'Copiague', 'Coram', 'Cutchogue',
  'Deer Park', 'Dix Hills', 'East Hampton', 'East Islip', 'East Marion',
  'East Moriches', 'East Northport', 'East Patchogue', 'East Quogue',
  'East Setauket', 'Eastport', 'Farmingville', 'Fire Island', 'Flanders',
  'Great River', 'Greenlawn', 'Greenport', 'Hauppauge', 'Holbrook',
  'Holtsville', 'Huntington', 'Huntington Station', 'Islandia', 'Islip',
  'Islip Terrace', 'Jamesport', 'Kings Park', 'Lake Grove', 'Lake Ronkonkoma',
  'Laurel', 'Lindenhurst', 'Manorville', 'Mastic', 'Mastic Beach',
  'Mattituck', 'Medford', 'Melville', 'Middle Island', 'Miller Place',
  'Montauk', 'Moriches', 'Mount Sinai', 'Nesconset', 'North Babylon',
  'North Patchogue', 'Northport', 'Oakdale', 'Ocean Beach', 'Orient',
  'Patchogue', 'Peconic', 'Port Jefferson', 'Port Jefferson Station',
  'Quogue', 'Remsenburg', 'Ridge', 'Riverhead', 'Rocky Point', 'Ronkonkoma',
  'Sag Harbor', 'Sagaponack', 'Saint James', 'Sayville', 'Selden',
  'Shelter Island', 'Shirley', 'Shoreham', 'Smithtown', 'Sound Beach',
  'South Jamesport', 'Southampton', 'Southold', 'Speonk', 'Stony Brook',
  'Wading River', 'Wainscott', 'Water Mill', 'West Babylon', 'West Islip',
  'West Sayville', 'Westhampton', 'Westhampton Beach', 'Wyandanch', 'Yaphank',
];
const NASSAU_TOWNS = [
  'Atlantic Beach', 'Baldwin', 'Bayville', 'Bellmore', 'Bethpage',
  'Carle Place', 'Cedarhurst', 'East Meadow', 'East Rockaway', 'Elmont',
  'Farmingdale', 'Floral Park', 'Franklin Square', 'Freeport', 'Garden City',
  'Glen Cove', 'Glen Head', 'Glenwood Landing', 'Great Neck', 'Greenvale',
  'Hempstead', 'Herricks', 'Hewlett', 'Hicksville', 'Inwood',
  'Island Park', 'Jericho', 'Lawrence', 'Levittown', 'Lido Beach',
  'Locust Valley', 'Long Beach', 'Lynbrook', 'Malverne', 'Manhasset',
  'Massapequa', 'Massapequa Park', 'Merrick', 'Mineola', 'New Hyde Park',
  'North Bellmore', 'North Merrick', 'North New Hyde Park', 'Oceanside',
  'Old Bethpage', 'Old Westbury', 'Oyster Bay', 'Plainview', 'Point Lookout',
  'Port Washington', 'Rockville Centre', 'Roosevelt', 'Roslyn', 'Roslyn Heights',
  'Sea Cliff', 'Seaford', 'South Farmingdale', 'South Floral Park',
  'South Hempstead', 'Syosset', 'Uniondale', 'Valley Stream', 'Wantagh',
  'West Hempstead', 'Westbury', 'Williston Park', 'Woodbury', 'Woodmere',
];
const QUEENS_TOWNS = [
  'Arverne', 'Astoria', 'Bayside', 'Bellerose', 'Briarwood',
  'Cambria Heights', 'College Point', 'Corona', 'Douglaston',
  'East Elmhurst', 'Elmhurst', 'Far Rockaway', 'Floral Park',
  'Flushing', 'Forest Hills', 'Fresh Meadows', 'Glen Oaks',
  'Glendale', 'Hollis', 'Howard Beach', 'Jackson Heights',
  'Jamaica', 'Kew Gardens', 'Little Neck', 'Long Island City',
  'Maspeth', 'Middle Village', 'Oakland Gardens', 'Ozone Park',
  'Rego Park', 'Richmond Hill', 'Ridgewood', 'Woodhaven',
];

export const REGIONS: RegionConfig[] = [
  {
    slug: 'suffolk',
    name: 'Suffolk County',
    shortName: 'Suffolk',
    stateName: 'New York',
    stateCode: 'NY',
    isPrimary: true,
    gmbId: null,
    counties: ['Suffolk County'],
    heroHeadline: 'Suffolk County Pest Control You Can Trust',
    heroSubhead: 'Licensed, local exterminators serving Huntington, Babylon, Islip, Brookhaven, and all of Suffolk County.',
    heroImage: '/images/suffolk-hero.jpg',
    geoDescription: 'From the North Shore estates to the South Shore beaches, Suffolk County homes face year-round pest pressure from rodents, termites, ticks, and wildlife.',
    primaryPests: ['Termites', 'Ticks', 'Rodents', 'Ants'],
    pestContext: "Suffolk County's mix of wooded lots, waterfront properties, and suburban neighborhoods creates ideal conditions for termites, ticks, rodents, and ants year-round.",
    metaTitle: 'Suffolk County Exterminators',
    metaDescription: 'Trusted pest control for Suffolk County. Serving Huntington, Babylon, Islip & all 101 communities. Eco-friendly treatments, same-day service.',
    towns: SUFFOLK_TOWNS,
    townCount: SUFFOLK_TOWNS.length,
  },
  {
    slug: 'nassau',
    name: 'Nassau County',
    shortName: 'Nassau',
    stateName: 'New York',
    stateCode: 'NY',
    isPrimary: false,
    gmbId: null,
    counties: ['Nassau County'],
    heroHeadline: 'Nassau County Pest Control Done Right',
    heroSubhead: 'Serving Hempstead, Garden City, Levittown, Long Beach, and every community across Nassau County.',
    heroImage: '/images/nassau-hero.jpg',
    geoDescription: "Nassau County's dense suburban communities and proximity to the coast bring persistent pest challenges from rodents, ants, termites, and mosquitoes.",
    primaryPests: ['Rodents', 'Termites', 'Ants', 'Mosquitoes'],
    pestContext: "Nassau County's suburban density and coastal climate create year-round conditions for rodents, termites, ants, and mosquitoes.",
    metaTitle: 'Nassau County Exterminators',
    metaDescription: 'Professional pest control for Nassau County. Serving Hempstead, Garden City, Levittown & 65 communities. Licensed, insured, family-safe.',
    towns: NASSAU_TOWNS,
    townCount: NASSAU_TOWNS.length,
  },
  {
    slug: 'queens',
    name: 'Queens',
    shortName: 'Queens',
    stateName: 'New York',
    stateCode: 'NY',
    isPrimary: false,
    gmbId: null,
    counties: ['Queens County'],
    heroHeadline: 'Queens Pest Control — Fast, Reliable, Effective',
    heroSubhead: 'Expert pest control for Queens homes, apartments, and businesses. Same-day service available.',
    heroImage: '/images/queens-hero.jpg',
    geoDescription: "Queens' diverse neighborhoods — from row houses in Astoria to apartments in Flushing — demand expert pest management for rodents, roaches, and bed bugs.",
    primaryPests: ['Rodents', 'Cockroaches', 'Bed Bugs', 'Ants'],
    pestContext: "Queens' urban density and diverse housing stock create persistent pest challenges, from rodents and cockroaches in apartments to bed bugs in multi-family buildings.",
    metaTitle: 'Queens Exterminators',
    metaDescription: 'Trusted pest control for Queens. Serving Astoria, Flushing, Jamaica & all neighborhoods. Fast response, effective treatments.',
    towns: QUEENS_TOWNS,
    townCount: QUEENS_TOWNS.length,
  },
];

// ============================================================
// TOWN ARRAYS (loaded from data/towns.json at build time,
//   but defined here for hub.config reference)
// ============================================================




// ============================================================
// NETWORK SITES — sister sites for cross-linking
// ============================================================
export const NETWORK_SITES: NetworkSite[] = [];

// ============================================================
// TYPES
// ============================================================
export interface GMBEntry {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  placeId: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
}

export interface RegionConfig {
  slug: string;
  name: string;
  shortName: string;
  stateName: string;
  stateCode: string;
  isPrimary: boolean;
  gmbId: string | null;
  counties: string[];
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  geoDescription: string;
  primaryPests: string[];
  pestContext: string;
  metaTitle: string;
  metaDescription: string;
  towns: string[];
  townCount: number;
}

export interface NetworkSite {
  name: string;
  url: string;
  description: string;
  emoji: string;
}
