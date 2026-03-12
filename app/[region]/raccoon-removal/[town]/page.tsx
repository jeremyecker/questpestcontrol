import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Raccoon Removal';
const SERVICE_SLUG = 'raccoon-removal';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  suffolk: {
    headline: `Raccoon Removal Services in Suffolk County, NY`,
    body: `Raccoon calls account for a significant share of Quest Pest Control's Suffolk County wildlife service requests, particularly in the wooded communities of Huntington, Smithtown, Commack, and Northport where mature tree canopy gives raccoons highway-level access to rooflines. Suffolk County's raccoon population is active year-round but peaks in spring denning season when pregnant females aggressively seek attic access. Quest Pest Control uses a season-aware removal strategy: eviction doors in spring to allow nursing mothers to move their young without abandonment, and live-trapping in fall/winter for transient raccoons. Every Quest raccoon job includes comprehensive exclusion repair — galvanized mesh, foam backer, and caulk at all identified entry and potential-entry points.`,
    faqs: [
      { q: `Will raccoons return to my Suffolk County home after removal?`, a: `Not through properly sealed entry points. Quest uses 16-gauge galvanized steel mesh that raccoons cannot pull away or gnaw through. We seal every gap larger than 3 inches on the roofline and fascia. All exclusion work comes with a 12-month guarantee against re-entry through sealed areas.` },
      { q: `How do raccoons get into attics of Suffolk County ranch homes?`, a: `Ranch homes in central Suffolk County (Smithtown, Hauppauge, Lake Ronkonkoma) typically have wide overhanging soffits and low rooflines that give raccoons easy access from adjacent trees. They pry away aging aluminum soffit panels at corners and at the junction between fascia and soffit runs.` },
      { q: `Does Quest remove raccoon latrines from Suffolk County attics?`, a: `Yes. Quest offers attic remediation following raccoon removal, including removal of contaminated insulation, sanitization with an enzyme-based cleaner that neutralizes raccoon roundworm eggs, and blown-in insulation replacement. This service is separate from removal but strongly recommended for health reasons.` },
    ],
  },
  nassau: {
    headline: `Raccoon Removal Services in Nassau County, NY`,
    body: `Quest Pest Control has extensive experience with Nassau County raccoon removal, serving communities from the Five Towns and South Shore to the Gold Coast communities of Great Neck, Manhasset, and Oyster Bay. Nassau County raccoons have adapted to suburban life with remarkable sophistication — they know which garbage nights to target, have mapped every accessible roofline in their territory, and return to the same den sites year after year. Quest's removal program uses season-specific protocols to avoid the ethical and legal complications of leaving nursing kits behind, and our exclusion work uses commercial-grade materials that stand up to Nassau County's determined raccoon population. Every job includes a complete written report with photos of all entry points and repair work.`,
    faqs: [
      { q: `How do I know if raccoons are in my Nassau County attic vs. squirrels?`, a: `Raccoon activity sounds much heavier — thumping, rolling sounds, and a distinct chittering vocalization from kits. Squirrels create lighter scurrying sounds. Raccoon entry points are larger (4+ inches) and typically show smudge marks from their oily fur. Quest inspects and provides a definitive species confirmation before treatment.` },
      { q: `Do raccoons dig up Nassau County lawns?`, a: `Yes. Raccoons regularly roll back Nassau County sod searching for grubs (particularly after Japanese beetle grub season in late summer). They also dig in planting beds. Quest's grub control consultation can reduce this behavior — contact us for a combined wildlife plus lawn pest assessment.` },
      { q: `Can Quest remove raccoons from under my Nassau County porch?`, a: `Yes. Raccoons that den under porches, stoops, and raised decks are removed using one-way eviction doors at the primary entry point and exclusion barriers at all secondary points. After removal is confirmed, we install a galvanized steel underground apron to prevent digging back in.` },
    ],
  },
  queens: {
    headline: `Raccoon Removal Services in Queens, NY`,
    body: `Quest Pest Control addresses raccoon infestations throughout Queens with the professional efficiency the borough's dense residential environment demands. Raccoon activity in Queens is concentrated in the wooded residential neighborhoods — Bayside, Little Neck, Fresh Meadows, and the Jamaica Estates area — where mature tree canopy provides access to rooflines and adequate shelter for denning females. Quest uses humane, DEC-compliant removal methods: one-way exclusion doors for nesting season infestations and live-trapping for transient raccoons. Post-removal exclusion sealing is standard on every job. Quest also offers raccoon latrine decontamination for attics where raccoon roundworm contamination is a health concern.`,
    faqs: [
      { q: `What is raccoon roundworm and why is it dangerous in Queens?`, a: `Raccoon roundworm (Baylisascaris procyonis) is a parasitic infection whose eggs are shed in raccoon feces. Eggs are extremely persistent in soil and attic spaces. Human infection — rare but possible through accidental ingestion — can cause severe neurological damage. Quest's attic decontamination uses enzyme-based sanitizers and removes contaminated insulation.` },
      { q: `How does Quest handle raccoons with kits in a Queens attic?`, a: `We use eviction-door technique: a one-way door is installed at the primary entry point during kitting season (February–June), allowing the mother to exit but not re-enter. She will typically relocate her kits to an alternate den site within 24–72 hours. Once we confirm the attic is vacant, we seal permanently.` },
      { q: `What does raccoon removal cost in Queens?`, a: `Raccoon removal in Queens typically ranges from $250–$600 for removal and basic exclusion. Attic decontamination and insulation replacement are additional. Quest provides a detailed written estimate before any work begins. Emergency same-day service may carry an additional fee.` },
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
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Raccoons in {townName}?</h2>
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
