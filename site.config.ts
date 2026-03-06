/**
 * ============================================================
 * SITE CONFIGURATION — Quest Pest Control
 * ============================================================
 * This is the ONLY file that changes between sites.
 * All components read from here.
 * ============================================================
 */

export const SITE_ID = 'quest';
export const SITE_NAME = 'Quest Pest Control';
export const SITE_DOMAIN = 'questpest.net';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://questpest.net';
export const SITE_TAGLINE = 'On a Quest to Eliminate Pests — Suffolk, Nassau & Queens';
export const SITE_DESCRIPTION = 'Locally owned pest control serving Suffolk County, Nassau County & Queens. Over 20 years of experience. Licensed, insured, and eco-friendly treatments. Free estimates, fast response.';
export const EMAIL = 'info@questpest.net';

export const SITE = {
  name: 'Quest Pest Control',
  id: 'quest',
} as const;

export const PHONE = '(631) 228-4498';
export const PHONE_RAW = '+16312284498';
export const PHONE_HREF = 'tel:+16312284498';

export const GEO = {
  county: 'Suffolk',
  countyFull: 'Suffolk County',
  state: 'New York',
  stateCode: 'NY',
  region: 'Suffolk County, Nassau County & Queens',
  totalTowns: 199,
  latitude: 0,
  longitude: 0,
} as const;

export const REGIONS = [
  { name: 'Suffolk County', slug: 'suffolk', townCount: 101 },
  { name: 'Nassau County', slug: 'nassau', townCount: 65 },
  { name: 'Queens', slug: 'queens', townCount: 33 },
] as const;

export const BRAND = {
  primaryColor: '#1A7A4C',
  secondaryColor: '#2E9A6A',
  accentColor: '#FF8C00',
  darkColor: '#1A2E1A',
  lightBg: '#EBF5EE',
  white: '#FFFFFF',
} as const;

export const PEST_OPTIONS = [
  'Ants',
  'Bed Bugs',
  'Cockroaches',
  'Fleas & Ticks',
  'Mice / Rats',
  'Mosquitoes',
  'Spiders',
  'Termites',
  'Wasps / Hornets',
  'Wildlife',
  'Other',
] as const;

export const SERVICES = [
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜', description: 'Keep ants out of your kitchen and away from your family. Effective, family-friendly treatments.' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵', description: 'Protect your biggest investment. Expert termite inspections and treatment.' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️', description: 'Help your family sleep easy again. Thorough bed bug removal using proven treatments.' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀', description: "Mice and rats don\'t belong near your family. We remove them and seal entry points." },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳', description: 'Complete cockroach elimination that protects your family and home.' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟', description: 'Take back your backyard. Family-friendly mosquito treatments for outdoor enjoyment.' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️', description: 'No more surprises in the basement or garage. Thorough spider removal for your whole home.' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝', description: "Protect your family from stinging insects. We\'ll remove nests from your property." },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗', description: 'Protect your family and pets. Professional flea and tick control for home and yard.' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝', description: 'Raccoons in the attic? Humane removal that protects your family.' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢', description: 'Customized pest management for businesses. Discreet, reliable, effective.' },
] as const;

export const GMB = {
  placeId: '',
  profileUrl: '',
  rating: 4.9,
  reviewsEnabled: true,
} as const;

export const TRUST_STATS = [
  { icon: '🤝', value: 'Thousands', label: 'Of Happy Customers' },
  { icon: '⚡', value: 'Same Day', label: 'Next Day Service' },
  { icon: '🔒', value: 'Discreet', label: 'Services' },
  { icon: '🔬', value: 'Expert', label: 'Analysis & Delivery' },
  { icon: '📞', value: 'High-Level', label: 'Communication' },
  { icon: '✅', value: 'Licensed', label: '& Insured' },
] as const;

export const LEAD_ROUTING = {
  defaultRoute: 'SS',
  webhookUrl: '',
} as const;

export const SEO = {
  titleTemplate: (pageTitle: string) => `${pageTitle} | Quest Pest Control`,
  defaultTitle: 'Quest Pest Control | Licensed Exterminators in Suffolk, Nassau & Queens',
  defaultDescription: SITE_DESCRIPTION,
  ogImage: '/images/og-default.jpg',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: 'Ant Control', href: '/services/ant-control' },
    { label: 'Termite Treatment', href: '/services/termite-treatment' },
    { label: 'Bed Bug Removal', href: '/services/bed-bug-removal' },
    { label: 'Rodent Control', href: '/services/rodent-control' },
    { label: 'Cockroach Control', href: '/services/cockroach-control' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const HOURS = {
  weekday: '7:00 AM – 7:00 PM',
  saturday: '7:00 AM – 5:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Emergency Service Available',
} as const;

export const REVIEWS = [
  {
    author: 'Satisfied Homeowner',
    location: 'Suffolk County, NY',
    rating: 5,
    date: '2024-09-15',
    text: "I can't express how grateful I am for Quest Pest! We had a terrible ant infestation that was driving us crazy. Their team responded quickly, identified the problem, and implemented an eco-friendly solution that worked wonders. Within days, the ants were gone, and they haven't returned in months. Highly recommend!",
  },
  {
    author: 'New Homeowner',
    location: 'Nassau County, NY',
    rating: 5,
    date: '2024-08-22',
    text: "Quest Pest is a lifesaver! We discovered termites in our newly purchased home and were devastated. The Quest team responded immediately, performed a thorough inspection, and developed a comprehensive treatment plan. They used state-of-the-art techniques to eliminate the termites and prevent future infestations.",
  },
  {
    author: 'Property Manager',
    location: 'Queens, NY',
    rating: 5,
    date: '2024-07-10',
    text: "Managing a large apartment complex comes with its share of pest control challenges. Quest Pest has consistently exceeded our expectations. Their proactive approach, quick response times, and effective treatments have significantly reduced pest-related complaints from our tenants.",
  },
] as const;

export const NETWORK_SITES = [] as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
