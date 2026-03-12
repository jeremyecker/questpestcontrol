import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Bed Bug Exterminator';
const SERVICE_SLUG = 'bed-bug-exterminator';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  suffolk: {
    headline: `Expert Bed Bug Exterminator in Suffolk County, NY`,
    body: `Bed bug infestations in Suffolk County have increased steadily as secondhand furniture purchases and short-term rental activity have grown. Quest Pest Control has treated thousands of Suffolk County homes and rental properties for bed bugs — from modest ranch homes in Brentwood to summer rentals in the Hamptons and Fire Island. Our Suffolk County bed bug protocol begins with a thorough visual inspection of all sleeping areas, headboards, and upholstered furniture. For confirmed infestations, we recommend heat treatment as our gold standard: a single treatment day that eliminates bed bugs at every life stage without ongoing chemical residue. For budget-conscious clients, targeted chemical treatment is available as an alternative. Quest backs all bed bug treatments with a 30-day free re-inspection guarantee.`,
    faqs: [
      { q: `How do I prepare my Suffolk County home for bed bug heat treatment?`, a: `Remove heat-sensitive items: candles, pressurized cans (hairspray, spray paint), vinyl records, and live plants. Bag and set aside medications. Remove bedding and bag it for immediate washing on hot. Leave furniture in place — heat treatment works by raising the temperature of the entire room, not just surfaces.` },
      { q: `Can Quest treat bed bugs in a Suffolk County summer rental?`, a: `Yes. Quest Pest Control offers between-rental treatment for Hamptons and coastal Suffolk County property managers. We work around turnover windows and provide written clearance documentation for property management records.` },
      { q: `How effective is heat treatment for bed bugs in Suffolk County homes?`, a: `Properly executed heat treatment achieves 95–99% eradication in a single treatment for most residential applications. The key is achieving thermal death temperatures (120°F+) throughout every harborage point, including inside mattress seams and wall voids. Quest's technicians monitor temperatures with calibrated probes throughout the treatment.` },
    ],
  },
  nassau: {
    headline: `Expert Bed Bug Exterminator in Nassau County, NY`,
    body: `Quest Pest Control brings focused bed bug extermination expertise to Nassau County's densely populated communities. From the apartment complexes of Long Beach and Hempstead to the colonial homes of Roslyn and the townhouses of Great Neck, Nassau County's housing diversity means bed bug treatment must be adaptable. Quest's Nassau County team offers the full range of bed bug solutions: K-9 scent detection dogs for confirmation of low-level infestations, heat treatment for single-day whole-unit eradication, and targeted chemical spray programs for budget-conscious treatments. We work with Nassau County property owners and building managers to coordinate multi-unit inspections and provide written documentation for tenant disputes and housing court filings.`,
    faqs: [
      { q: `Are Nassau County landlords required to disclose bed bugs to tenants?`, a: `New York State law requires landlords to disclose prior bed bug infestations to new tenants and to remediate bed bug conditions. Nassau County tenants who discover an infestation can file a complaint with the Nassau County Department of Health. Quest provides inspection reports suitable for legal proceedings.` },
      { q: `What is K-9 bed bug detection and is it accurate?`, a: `Properly trained bed bug detection dogs can locate live bed bug infestations with 95%+ accuracy — far better than visual inspection alone. Quest uses certified detection dogs to confirm or rule out infestations before recommending treatment, saving clients from unnecessary expense.` },
      { q: `Can Quest treat a Nassau County house with same-day service?`, a: `Same-day chemical spot treatments are sometimes possible. Heat treatment typically requires 1–2 days advance scheduling for equipment staging. Call early in the morning for same-day availability — Quest dispatches same-day for urgent cases wherever possible across Nassau County.` },
    ],
  },
  queens: {
    headline: `Expert Bed Bug Exterminator in Queens, NY`,
    body: `Quest Pest Control serves Queens homeowners and apartment residents with targeted bed bug extermination built for the borough's unique housing mix of attached rowhomes, walkup apartments, and high-rise buildings. Queens is one of the city's most transient boroughs — JFK Airport arrivals, a large hotel and short-term rental market, and constant movement between neighborhoods creates one of New York's highest bed bug introduction rates. Quest's Queens bed bug service uses K-9 detection for room-by-room confirmation, heat treatment for whole-unit eradication, and can coordinate multi-unit inspections in apartment buildings with cooperative building management. Same-day service is available throughout Queens neighborhoods including Astoria, Flushing, Jackson Heights, and Forest Hills.`,
    faqs: [
      { q: `How does JFK Airport increase bed bug risk for Queens residents?`, a: `JFK is one of the world's busiest airports, and a significant share of international travelers carry bed bugs in luggage without knowing. Hotel workers, rideshare drivers, and the high hospitality employment in Queens neighborhoods near JFK create elevated ongoing bed bug exposure risk.` },
      { q: `Can Quest treat a Queens apartment without notifying the landlord?`, a: `Yes — Quest works directly with tenants and does not require landlord involvement for individual unit treatment. However, New York City law requires landlords to remediate bed bug conditions, so Quest recommends also notifying your building management in writing to create a legal record.` },
      { q: `What is the difference between heat treatment and spray treatment for Queens apartments?`, a: `Heat treatment kills all life stages in a single day without chemical residue — ideal for renters concerned about chemical exposure. Spray treatment uses EPA-registered insecticides in a crack-and-crevice application requiring two visits spaced 10–14 days apart. Heat treatment costs more upfront but typically requires only one visit.` },
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
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Bed Bugs in {townName}?</h2>
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
