import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getRegion } from '@/lib/regions';
import { BRAND, REGIONS } from '@/hub.config';

// ─── Region-differentiated FAQ data ───────────────────────────────────────────
const REGION_FAQS: Record<string, { q: string; a: string }[]> = {
  suffolk: [
    {
      q: 'What pests are most common in Suffolk County?',
      a: 'Termites, ticks, and rodents are the top concerns in Suffolk County. Eastern subterranean termites are active in wooded neighborhoods from Huntington to Brookhaven, deer ticks are a year-round risk in wooded properties, and mice press indoors every fall. Quest Pest Control provides comprehensive coverage across all 101 Suffolk communities.',
    },
    {
      q: 'Do you offer same-day service in {town}?',
      a: 'Yes — Quest Pest responds same-day or next-day to most calls in {town} and throughout Suffolk County. Call (631) 228-4498 for immediate assistance.',
    },
    {
      q: 'Is termite treatment covered in Suffolk County?',
      a: "Yes. Eastern subterranean termites are prevalent across Suffolk County's wooded and waterfront neighborhoods. We offer liquid termiticide barriers and bait station systems with long-term warranties.",
    },
    {
      q: 'Do you treat tick infestations in {town}?',
      a: 'Absolutely. Suffolk County is one of the highest-risk counties in New York for Lyme disease. We provide outdoor tick barrier treatments April through October targeting leaf litter, shrub borders, and wooded edges.',
    },
  ],
  nassau: [
    {
      q: 'What pests are most common in Nassau County?',
      a: "Nassau County's dense suburban neighborhoods see high activity from rodents, ants, termites, and mosquitoes. The coastal influence creates conditions for moisture-loving pests like cockroaches and silverfish. Quest Pest Control serves all 69 Nassau communities.",
    },
    {
      q: 'How quickly can you respond in {town}?',
      a: "Quest Pest offers same-day service across Nassau County including {town}. Call (631) 228-4498 and we'll dispatch the closest available technician.",
    },
    {
      q: 'Do you handle ant infestations in Nassau County?',
      a: 'Yes — carpenter ants and pavement ants are the most common species in Nassau suburbs. We identify the colony source and use targeted baiting to eliminate the nest, not just the visible workers.',
    },
    {
      q: 'Are your treatments effective for bed bugs in Nassau County?',
      a: 'Yes. Quest Pest offers heat treatment and chemical treatment for bed bugs in Nassau County homes and apartments. We also offer K-9 inspection to confirm infestations before treatment.',
    },
  ],
  queens: [
    {
      q: 'What are the most common pest problems in Queens?',
      a: "Queens' urban density and diverse housing stock create persistent challenges from rodents, cockroaches, and bed bugs. Multi-unit buildings are particularly susceptible to German cockroach infestations and bed bug spread between units.",
    },
    {
      q: 'Can you treat apartments and multi-unit buildings in {town}?',
      a: 'Yes — Quest Pest has extensive experience in Queens apartments and multi-family buildings. We work with landlords and property managers to treat individual units and common areas discreetly and effectively.',
    },
    {
      q: 'How do you handle rodent problems in Queens?',
      a: 'Our rodent program combines thorough inspection, tamper-resistant bait stations, and physical exclusion — sealing the entry points that let mice and rats in. Without sealing, rodents return. We address both.',
    },
    {
      q: 'Do you offer same-day pest control in {town}, Queens?',
      a: 'Yes. Quest Pest provides same-day service across Queens neighborhoods. Call (631) 228-4498 for immediate dispatch.',
    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function toTownName(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function toTownSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function getNearbyTowns(towns: string[], currentSlug: string): string[] {
  const idx = towns.findIndex(t => toTownSlug(t) === currentSlug);
  if (idx === -1) return towns.slice(0, 5);
  const nearby: string[] = [];
  const total = towns.length;
  for (let offset = -2; offset <= 2; offset++) {
    if (offset === 0) continue;
    const i = ((idx + offset) % total + total) % total;
    nearby.push(towns[i]);
  }
  return nearby.slice(0, 5);
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  const townName = toTownName(townSlug);
  return {
    title: `Pest Control in ${townName}, ${region.stateCode} | ${BRAND.name}`,
    description: `Professional pest control in ${townName}, ${region.stateCode}. Same-day service, licensed & insured. Call ${BRAND.phoneFormatted} for a free inspection.`,
  };
}

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return REGIONS.flatMap(region =>
    region.towns.map(town => ({
      region: region.slug,
      town: toTownSlug(town),
    }))
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function TownPage({
  params,
}: {
  params: Promise<{ region: string; town: string }>;
}) {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  const townName = toTownName(townSlug);
  const isValidTown = region.towns.some(t => toTownSlug(t) === townSlug);
  if (!isValidTown && region.towns.length > 0) notFound();

  const rawFaqs = REGION_FAQS[regionSlug] ?? REGION_FAQS['suffolk'];
  const faqs = rawFaqs.map(({ q, a }) => ({
    q: q.replace(/\{town\}/g, townName),
    a: a.replace(/\{town\}/g, townName),
  }));

  const nearbyTowns = getNearbyTowns(region.towns, townSlug);

  const canonicalUrl = `https://${BRAND.domain}/${regionSlug}/${townSlug}/`;

  // ─── JSON-LD schemas ─────────────────────────────────────────────────────
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    telephone: BRAND.phoneFormatted,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: townName,
      addressRegion: region.stateCode,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: townName,
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 07:00-19:00',
    hasMap: `https://www.google.com/maps/search/${encodeURIComponent(
      `${BRAND.name} ${townName} ${region.stateCode}`
    )}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${BRAND.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.name,
        item: `https://${BRAND.domain}/${regionSlug}/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Service Areas',
        item: `https://${BRAND.domain}/${regionSlug}/service-areas/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `Pest Control in ${townName}`,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href={`/${regionSlug}/`} className="hover:text-brand-primary">
            {region.name}
          </Link>
          {' › '}
          <Link href={`/${regionSlug}/service-areas/`} className="hover:text-brand-primary">
            Service Areas
          </Link>
          {' › '}
          <span className="text-gray-900 font-medium">{townName}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-brand-primary text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-wide mb-2">
            {region.name} Pest Control
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pest Control in {townName}, {region.stateCode}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl">
            {BRAND.name} protects {townName} homes and businesses from pests — fast, guaranteed, and locally operated.{' '}
            {region.pestContext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:+1${BRAND.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-50 transition-colors"
            >
              📞 {BRAND.phoneFormatted}
            </a>
            <Link
              href={`/${regionSlug}/contact/`}
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Stats Bar ── */}
      <section className="bg-gray-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
          <span>✅ Same-Day Service</span>
          <span>✅ Licensed &amp; Insured</span>
          <span>✅ Serving {region.name}</span>
          <span>✅ Free Inspections</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* ── Service Cards ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Services in {townName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🐜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">General Pest Control</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive treatment for ants, cockroaches, spiders, centipedes, silverfish, and seasonal pests.
                Interior and exterior barrier protection.
              </p>
              <Link
                href={`/${regionSlug}/contact/`}
                className="text-brand-primary font-semibold text-sm hover:underline"
              >
                Schedule Service →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🛏️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bed Bug Treatment</h3>
              <p className="text-gray-600 text-sm mb-4">
                Heat treatment, chemical treatment, and K-9 detection. We eliminate infestations completely
                with discreet service for homes and apartments.
              </p>
              <Link
                href={`/${regionSlug}/contact/`}
                className="text-brand-primary font-semibold text-sm hover:underline"
              >
                Schedule Service →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🐭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rodent Control</h3>
              <p className="text-gray-600 text-sm mb-4">
                Inspection, tamper-resistant bait stations, and physical exclusion to seal entry points.
                We stop rodents from coming back.
              </p>
              <Link
                href={`/${regionSlug}/contact/`}
                className="text-brand-primary font-semibold text-sm hover:underline"
              >
                Schedule Service →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions — {townName}
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {q}
                  <span className="text-brand-primary ml-4 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Nearby Towns ── */}
        {nearbyTowns.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Also Serving Nearby Communities
            </h2>
            <p className="text-gray-600 mb-5">
              Quest Pest Control serves all of {region.name}. In addition to {townName}, we provide
              same-day service to neighboring towns:
            </p>
            <div className="flex flex-wrap gap-3">
              {nearbyTowns.map(nearby => (
                <Link
                  key={nearby}
                  href={`/${regionSlug}/${toTownSlug(nearby)}/`}
                  className="bg-brand-light text-brand-dark font-medium px-4 py-2 rounded-full text-sm hover:bg-brand-primary hover:text-white transition-colors"
                >
                  {nearby}
                </Link>
              ))}
              <Link
                href={`/${regionSlug}/service-areas/`}
                className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                View All {region.name} Towns →
              </Link>
            </div>
          </section>
        )}

        {/* ── Dual CTA ── */}
        <section className="bg-brand-primary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready to Eliminate Pests in {townName}?
          </h2>
          <p className="text-green-100 mb-6">
            Same-day service available. Licensed, insured, and locally trusted across {region.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${regionSlug}/contact/`}
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:+1${BRAND.phone}`}
              className="inline-flex items-center justify-center bg-white text-brand-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-50 transition-colors"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
