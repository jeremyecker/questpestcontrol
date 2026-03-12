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
    headline: `Rodent Control Services in Suffolk County, NY`,
    body: `Quest Pest Control's Suffolk County rodent control programs address the county's dual rodent challenge: Norway rat activity in the western Suffolk communities of Babylon, Bay Shore, and Islip where urban-style food pressure and aging infrastructure support rat populations; and white-footed mouse incursions in the wooded communities of central and eastern Suffolk where mice enter homes each fall from surrounding woodland. Quest uses an integrated approach — species identification first, then tailored treatment combining exterior bait stations, interior trapping, and systematic exclusion. We also offer full attic and crawl space exclusion for homes in wooded Suffolk County communities where mouse pressure is seasonal but predictable.`,
    faqs: [
      { q: `Why do I get mice every fall in my Suffolk County home?`, a: `Wooded Suffolk County communities experience predictable fall mouse invasions as white-footed and house mice seek warm shelter before winter. They enter through gaps as small as 1/4 inch around utility lines, under doors, and through weep holes in brick veneer. Quest offers fall exclusion programs timed to the September–October peak entry window.` },
      { q: `Are rat infestations common in Suffolk County?`, a: `Rat infestations are more common in western Suffolk County communities adjacent to dense commercial areas and older municipal sewer infrastructure. In eastern Suffolk, rats occasionally colonize properties with chicken coops, backyard composting, or adjacent restaurant dumpsters. Quest's assessment identifies the source before treating.` },
      { q: `How does Quest's exterior bait station program work?`, a: `Quest installs tamper-resistant, locked bait stations at building entry points and perimeter locations. Stations are checked and re-baited monthly. All stations are mapped and documented. Quest provides monthly service reports suitable for HOA and health department records.` },
    ],
  },
  nassau: {
    headline: `Rodent Control Services in Nassau County, NY`,
    body: `Quest Pest Control's Nassau County rodent control programs combine the precision of targeted interior treatment with the sustained pressure of exterior perimeter baiting to deliver lasting rodent reduction. Nassau County's mix of older urban cores (Hempstead, Freeport, Long Beach) with high rat pressure and newer suburban communities (Syosset, Bethpage, Plainview) with primarily mouse pressure requires adaptable treatment programs. Quest begins every rodent engagement with a comprehensive inspection to identify the species, entry points, harborage areas, and food sources driving the infestation. Treatment is customized to address root causes, not just visible activity. Monthly service plans are available for Nassau County property managers and homeowners with ongoing pressure.`,
    faqs: [
      { q: `How do I know if I have rats or mice in my Nassau County home?`, a: `Rat droppings are 1/2–3/4 inch, blunt at both ends. Mouse droppings are 1/8–1/4 inch with pointed ends. Rats typically burrow along foundations and move through ground-level areas; mice run along wall edges and are found throughout the home. Quest identifies the species before tailoring treatment.` },
      { q: `Does Quest offer emergency rodent service in Nassau County?`, a: `Yes. Quest Pest Control provides same-day emergency rodent service throughout Nassau County. If you have an active infestation with rodents visible in living areas, call early in the morning for same-day dispatch. Emergency services are available 7 days a week.` },
      { q: `What sanitation changes help with Nassau County rodent control?`, a: `Key changes include securing garbage in lidded containers, eliminating bird feeders (or using catch trays), storing pet food in sealed containers, clearing wood and debris piles adjacent to the building, and trimming ground cover away from foundation walls. Quest provides a written sanitation checklist with every service visit.` },
    ],
  },
  queens: {
    headline: `Rodent Control Services in Queens, NY`,
    body: `Quest Pest Control fights rodent infestations throughout Queens using an integrated program that addresses both the immediate infestation and the structural conditions that allow rodents to enter and persist. Queens' rodent pressure is significant — the borough is home to dense restaurant corridors on Roosevelt Avenue, Northern Boulevard, and Jamaica Avenue, all of which sustain large rat populations that pressure adjacent residences. Rowhome neighborhoods like Woodside, Maspeth, and Middle Village face mouse infestations driven by shared wall cavity access. Quest combines exterior bait station deployment, interior trapping, and systematic exclusion of entry points to provide sustained control — not just a temporary knockdown.`,
    faqs: [
      { q: `How do restaurants in Queens affect rodent pressure in nearby residences?`, a: `Restaurants generate abundant food waste in grease traps, garbage areas, and loading docks that sustain large rat populations. These populations pressure adjacent residences constantly, particularly at night when rats forage widely. Exterior bait station maintenance is the most effective buffer between restaurant-zone rat pressure and residential buildings.` },
      { q: `Do rowhomes in Queens have worse mouse problems than detached homes?`, a: `Rowhomes share wall cavities with neighbors, giving mice access across entire blocks. A single infested rowhome can seed adjacent units through shared walls in weeks. Quest recommends simultaneous treatment with neighbors when possible, and always performs exclusion of interior wall penetrations to limit spread.` },
      { q: `What time of year is worst for rodents in Queens?`, a: `Fall (September–November) is peak season as temperatures drop and mice seek indoor warmth. Rat activity is year-round but often increases in spring when overwintering populations breed. Quest recommends a pre-fall inspection in August to seal entry points before the peak intrusion window.` },
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
