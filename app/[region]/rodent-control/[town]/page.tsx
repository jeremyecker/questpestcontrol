import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Rodent Control';
const SERVICE_SLUG = 'rodent-control';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  suffolk: {
    headline: `Expert Rodent Control in Suffolk County, NY`,
    body: `Suffolk County's diverse landscape — from wooded interior townships to dense South Shore communities and North Fork farmland — supports large populations of both house mice and Norway rats. Wooded lots in Brookhaven and Smithtown see deer mice and voles in addition to the common house mouse, while coastal and marina communities deal with persistent Norway rat populations near waterways. Our Suffolk County rodent control specialists tailor programs to your specific environment: exterior rodent bait stations for larger properties, full interior exclusion for homes with active infestations, and commercial IPM programs for restaurants and warehouses. We serve all of Suffolk County with same-day inspection availability and guaranteed results.`,
    faqs: [
      { q: 'Are deer mice or hantavirus a concern in Suffolk County?', a: 'Deer mice, which can carry hantavirus, are present in wooded parts of Suffolk County but are far less common in homes than the typical house mouse. Any rodent dropping cleanup in attics or crawlspaces should use protective equipment and HEPA vacuums.' },
      { q: 'How do rats get into homes near Suffolk County waterways?', a: 'Norway rats near water frequently burrow under foundations, enter through broken sewer laterals, and access homes through gaps in basement walls at or below grade. Waterfront and marina-adjacent properties need regular exterior inspections.' },
      { q: 'What is the cost of rodent control in Suffolk County?', a: 'A one-time rodent inspection and exclusion treatment for a single-family Suffolk County home typically starts at a few hundred dollars depending on scope. We provide detailed written estimates after our free inspection.' },
    ],
  },
  nassau: {
    headline: `Expert Rodent Control in Nassau County, NY`,
    body: `Nassau County's suburban homes, shopping centers, and older housing stock provide mice and rats with ample harborage and food sources year-round. As weather cools each fall, mice attempt to enter Nassau homes in large numbers through gaps around pipes, foundation cracks, and gaps at garage door sweeps. Rats are prevalent near waterways, dumpsters, and older sewer infrastructure in denser Nassau communities like Hempstead and Freeport. Our Nassau County rodent control program begins with a thorough exterior and interior inspection, followed by professional exclusion work and deployment of tamper-resistant bait stations. We also provide sanitation recommendations to remove food and harborage attractants. Monthly maintenance plans available for Nassau homeowners and commercial accounts.`,
    faqs: [
      { q: 'When is rodent season in Nassau County?', a: 'Rodent activity in Nassau County peaks in fall (September–November) as mice and rats seek warm harborage for winter. However, rodents breed year-round indoors, so infestations can develop in any season.' },
      { q: 'How do I mouse-proof my Nassau County home?', a: 'Seal all gaps 1/4 inch or larger around pipes, wires, and foundation penetrations. Install door sweeps, replace damaged weatherstripping, and ensure garage doors seal properly. Our team can perform a full exclusion inspection and seal your home professionally.' },
      { q: 'Do you offer rodent control maintenance plans in Nassau County?', a: 'Yes. Our monthly maintenance plans for Nassau County homes and businesses include regular bait station checks, trap service, and exterior inspections. Plans start at a flat monthly rate with no long-term contract required.' },
    ],
  },
  queens: {
    headline: `Expert Rodent Control in Queens, NY`,
    body: `Queens' diverse neighborhoods — from the dense apartment corridors of Astoria to the residential streets of Bayside — all face rodent pressure driven by proximity to food sources, subway lines, and aging utility infrastructure. Mice exploit gaps as small as a dime to enter Queens homes, while rats tunnel under foundations and enter through broken drain pipes and cracks in masonry. Our Queens rodent control specialists perform full exterior and interior inspections, identify all active entry points, and seal them with professional-grade exclusion materials. We install tamper-resistant bait stations appropriate for your property type — from single-family rowhomes to large apartment complexes — and provide monthly maintenance programs to ensure long-term results. Call for a free rodent inspection in any Queens neighborhood.`,
    faqs: [
      { q: 'How do mice get into Queens apartments in winter?', a: 'Mice enter Queens homes through utility penetrations, gaps around pipes under sinks, cracks in foundation walls, and gaps around doors and windows. As temperatures drop, they seek warm harborage inside buildings.' },
      { q: 'What signs of rodents should I look for in a Queens home?', a: 'Look for dark droppings near food sources, gnaw marks on wood and food packaging, greasy rub marks along baseboards, and shredded nesting material in drawers or attic insulation.' },
      { q: 'Can you do rodent control in Queens commercial buildings?', a: 'Absolutely. We handle rodent control for restaurants, offices, warehouses, and multi-family buildings throughout Queens, including compliance documentation for NYC Health Code inspections.' },
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
    openGraph: {
      title,
      description,
      url: `https://${BRAND.domain}/${regionSlug}/${SERVICE_SLUG}/${townSlug}`,
      images: [{ url: `https://${BRAND.domain}/og-image.png` }],
    },
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
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Rodents in {townName}?</h2>
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
