import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Wildlife Removal';
const SERVICE_SLUG = 'wildlife-removal';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  suffolk: {
    headline: `Wildlife Removal Services in Suffolk County, NY`,
    body: `Quest Pest Control handles the full spectrum of Suffolk County wildlife removal — from the raccoons and squirrels that top our service call list to groundhogs burrowing under sheds in Commack, skunks denning under Babylon decks, and Canada geese fouling the lawns of Islip waterfront properties. Eastern Suffolk communities near the Peconic Estuary and South Fork also encounter mink near waterfront structures, pheasants nesting in landscape beds, and occasional red fox conflicts. Quest technicians hold New York State DEC nuisance wildlife permits for all common Suffolk species and carry liability insurance. We resolve wildlife conflicts completely — removal, exclusion, and habitat modification — not just the immediate animal.`,
    faqs: [
      { q: `Do you handle skunk removal in Suffolk County?`, a: `Yes. Quest Pest Control removes skunks from under decks, slabs, and sheds throughout Suffolk County. We use covered live-cage traps that minimize spray risk, set traps at dusk when skunks are active, and remove them before dawn. Post-removal, the burrow entry is sealed with steel mesh set below grade to prevent return.` },
      { q: `What should I do if I find a baby raccoon or squirrel in Suffolk County?`, a: `Do not handle the animal without gloves. If uninjured, place the animal in an open container near where it was found — the mother is often nearby and will retrieve it. If the mother does not return within several hours, contact a licensed wildlife rehabilitator. Quest can assist with removal but does not provide wildlife rehabilitation services.` },
      { q: `How does Quest handle Canada geese at Suffolk County waterfront properties?`, a: `Quest's Canada geese program includes landscape modification to reduce preferred loafing areas, egg addling under federal permit to reduce flock growth, and exclusion fencing along water edges. Hazing programs using trained dogs (border collies) are also available for larger properties. Full nest removal requires a Migratory Bird Treaty Act permit held by Quest.` },
    ],
  },
  nassau: {
    headline: `Wildlife Removal Services in Nassau County, NY`,
    body: `Quest Pest Control is Nassau County's trusted wildlife removal service — handling raccoons, squirrels, groundhogs, skunks, opossums, and Canada geese across the county's dense suburban landscape. Nassau County's proximity to the South Shore bays and North Shore Sound means coastal and waterfront wildlife species add to the standard suburban mix: muskrats near drainage canals, herons nesting near ornamental ponds, and shorebirds in protected areas. Quest technicians hold all required DEC nuisance wildlife permits and maintain liability insurance for all wildlife work. We serve residential homeowners, HOA common areas, commercial properties, and waterfront estates across Nassau County with the same professional standard.`,
    faqs: [
      { q: `How do I report a wild animal emergency in Nassau County?`, a: `For injured or aggressive wildlife in Nassau County, contact the Nassau County SPCA at 516-665-3220 or Nassau County Animal Control. For nuisance wildlife causing property damage, Quest Pest Control provides same-day response. Do not attempt to handle wildlife yourself — even apparently healthy raccoons can carry rabies.` },
      { q: `Do you handle bird nesting problems in Nassau County?`, a: `Quest handles nesting exclusion for unprotected species including pigeons, European starlings, and house sparrows. Protected migratory species (all songbirds, hawks, owls) require federal permits for any nest disturbance. Quest can advise on the appropriate approach and coordinate permitted activity where required.` },
      { q: `Can Quest handle wildlife removal at Nassau County HOA communities?`, a: `Yes. Quest Pest Control provides HOA wildlife management programs for Nassau County communities, including recurring service contracts, community-wide exclusion programs, and Canada goose management for communities with retention ponds. Contact Quest for a community assessment and proposal.` },
    ],
  },
  queens: {
    headline: `Wildlife Removal Services in Queens, NY`,
    body: `Quest Pest Control handles all common urban wildlife conflicts throughout Queens, from raccoons and squirrels to opossums finding shelter in basement egress wells, skunks denning under Howard Beach waterfront decks, and Canada geese nesting aggressively near Flushing Meadows-Corona Park. Queens' geographic diversity — from the dense urban core of Long Island City to the more suburban character of Bayside and Douglaston — means wildlife species and behaviors vary significantly by neighborhood. Quest technicians are familiar with the full range of Queens wildlife scenarios and hold all required DEC nuisance wildlife permits. Same-day wildlife response is available for urgent situations throughout Queens.`,
    faqs: [
      { q: `What should I do if I find an injured wild animal in Queens?`, a: `Contact the New York City Wildlife Center (718-720-5045) or the Wild Bird Fund (212-331-9404) for injured wildlife. For active nuisance wildlife causing property damage, call Quest for same-day response. Do not attempt to handle injured wildlife — even injured animals can bite defensively.` },
      { q: `Are opossums dangerous to Queens residents?`, a: `Opossums are generally non-aggressive and rarely carry rabies (their body temperature is too low for the rabies virus to survive). However, they can bite if cornered, and their presence under decks creates waste buildup and potential disease risk. Quest removes opossums humanely and seals their access points.` },
      { q: `Do you handle Canada goose conflicts near Flushing Meadows in Queens?`, a: `Yes. Quest offers Canada goose deterrence programs for properties adjacent to Flushing Meadows-Corona Park and other Queens parks with established goose populations. Programs include landscape modification, egg addling (with federal permit), and exclusion fencing along water edges.` },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const fullTitle = `${SERVICE_NAME} in ${townName}, ${region.stateCode} | ${BRAND.name}`;
  const shortTitle = `${SERVICE_NAME} in ${townName}, ${region.stateCode}`;
  const title = fullTitle.length <= 60 ? fullTitle : shortTitle;
  const description = `Licensed ${SERVICE_NAME.toLowerCase()} serving ${townName}, ${region.stateCode}. ${BRAND.name} — same-day service, guaranteed results. Call ${BRAND.phoneFormatted}.`;
  return {
    title,
    description: description.length <= 155 ? description : description.slice(0, 152) + '...',
    alternates: { canonical: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}` },
  };
}

export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  return REGIONS.flatMap((region: { slug: string; towns: string[] }) =>
    region.towns.map((town: string) => ({
      region: region.slug,
      town: town.toLowerCase().replace(/\s+/g, '-'),
    }))
  );
}

export default async function ServiceTownPage({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}) {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isValidTown = region.towns.some(
    (t: string) => t.toLowerCase().replace(/\s+/g, '-') === townSlug
  );
  if (!isValidTown) notFound();

  const content = SERVICE_CONTENT[regionSlug] ?? SERVICE_CONTENT[Object.keys(SERVICE_CONTENT)[0]];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: `${SERVICE_NAME} — ${townName}`,
    provider: { '@type': 'LocalBusiness', name: BRAND.name, telephone: `+1${BRAND.phone}` },
    areaServed: { '@type': 'City', name: townName },
    url: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' / '}
          <Link href={`/${regionSlug}`} className="hover:text-brand-primary">{region.name}</Link>
          {' / '}
          <Link href={`/${regionSlug}/${SERVICE_SLUG}`} className="hover:text-brand-primary">{SERVICE_NAME}</Link>
          {' / '}
          <span className="text-gray-900">{townName}</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.headline}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{content.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href={`tel:+1${BRAND.phone}`} className="flex-1 text-center bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            📞 Call {BRAND.phoneFormatted}
          </a>
          <Link href={`/${regionSlug}/contact`} className="flex-1 text-center bg-brand-accent text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{SERVICE_NAME} FAQ — {townName}</h2>
        <div className="space-y-6 mb-12">
          {content.faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-primary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Wildlife in {townName}?</h2>
          <p className="mb-6 opacity-90">Licensed, insured, same-day service available. Call now or get a free quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:+1${BRAND.phone}`} className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">📞 {BRAND.phoneFormatted}</a>
            <Link href={`/${regionSlug}/contact`} className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
