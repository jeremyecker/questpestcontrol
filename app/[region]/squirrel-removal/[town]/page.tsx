import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRegion } from '@/lib/regions';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Squirrel Removal';
const SERVICE_SLUG = 'squirrel-removal';

interface ServiceContent {
  headline: string;
  body: string;
  faqs: { q: string; a: string }[];
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  suffolk: {
    headline: `Squirrel Removal Services in Suffolk County, NY`,
    body: `Quest Pest Control removes gray squirrels from Suffolk County homes with a systematic exclusion-first approach that is both effective and humane. Suffolk County's combination of mature oak and maple woodland — particularly in Huntington, Northport, Setauket, and Stony Brook — keeps squirrel populations dense and active. Attic intrusions in Suffolk County typically occur in two peak windows: late summer as the year's second litter of kits matures and seeks territory, and late September through November as animals prepare winter den sites. Quest's exclusion process installs one-way funnel devices at active entry points, seals all secondary vulnerabilities simultaneously, confirms exit within 48–72 hours, and permanently seals with chew-proof steel mesh.`,
    faqs: [
      { q: `Can squirrels get into a Suffolk County home through the soffit?`, a: `Yes — it's the most common entry route. Aluminum soffit installed in the 1970s–1990s on central Suffolk County ranch and cape cod homes degrades at corners and at the junction with the fascia. Squirrels gnaw through these weakened areas in minutes. Quest recommends proactive steel mesh installation at all soffit vent locations as a preventive measure.` },
      { q: `What happens if squirrel kits are left in my Suffolk County attic?`, a: `If exclusion is performed while a nursing female is outside, she will attempt to re-enter aggressively, causing additional damage. If we discover kits present, Quest uses an eviction strategy — placing a mild deterrent near the nest to encourage the mother to relocate her kits voluntarily before exclusion is completed.` },
      { q: `How much does squirrel removal cost in Suffolk County?`, a: `Squirrel removal costs vary based on the number of entry points, the degree of attic access, and whether follow-up visits are required. Most Suffolk County residential jobs range from $350–$800 including exclusion repair. Quest provides a detailed written estimate before any work begins.` },
    ],
  },
  nassau: {
    headline: `Squirrel Removal Services in Nassau County, NY`,
    body: `Quest Pest Control removes gray squirrels from Nassau County homes using a proven exclusion-and-seal methodology that permanently resolves infestations. Nassau County's mature suburban landscaping — decades-old oaks in communities like Roslyn Heights, Glen Head, and Oyster Bay — supports dense squirrel populations that compete aggressively for limited attic den sites each fall. Homes in Levittown and Hicksville with original post-war construction are particularly vulnerable as aging aluminum soffits and wood fascia deteriorate. Quest's Nassau County squirrel removal process begins with a full roofline and attic inspection, followed by exclusion funnel installation, confirmation of exit, and permanent sealing with galvanized steel mesh.`,
    faqs: [
      { q: `How do squirrels find entry points on Nassau County homes?`, a: `Squirrels explore rooflines systematically and exploit any gap larger than 1.5 inches. They frequently find entry at soffit corners, where the end cap of an aluminum soffit run deteriorates, and at the point where dormer siding meets the main roofline. Quest inspects the full roofline perimeter, not just visible damage.` },
      { q: `Are there squirrel species other than gray squirrels in Nassau County?`, a: `Eastern gray squirrels are by far the most common species causing attic intrusions in Nassau County. Red squirrels occasionally appear in more wooded areas near the North Shore. Flying squirrels are present in Nassau County but are less commonly encountered in residential structures.` },
      { q: `Does homeowners insurance cover squirrel damage in Nassau County?`, a: `Coverage varies by policy. Most standard homeowners policies cover 'sudden and accidental' damage — a single gnaw-through event — but may exclude gradual rodent damage. Quest provides detailed damage documentation that insurance adjusters can use to evaluate claims. We recommend filing promptly after discovering an infestation.` },
    ],
  },
  queens: {
    headline: `Squirrel Removal Services in Queens, NY`,
    body: `Quest Pest Control handles squirrel removal throughout Queens, addressing the infestations that regularly occur in the borough's rowhome and semi-detached housing stock as gray squirrels exploit deteriorated fascia and soffit on older buildings. Residential areas with significant tree canopy — Forest Hills, Kew Gardens, Douglaston, and Bayside — see the highest squirrel activity, particularly in fall when animals establish winter den sites. Quest's Queens squirrel removal service uses one-way exclusion funnels as the primary method, allowing squirrels to exit without re-entry, followed by permanent sealing with galvanized steel mesh at all confirmed and potential entry points. We provide same-day or next-day scheduling throughout Queens and include a post-exclusion roofline inspection report.`,
    faqs: [
      { q: `Is squirrel removal different for Queens rowhomes vs. detached houses?`, a: `Rowhomes in Queens present unique challenges — shared rooflines mean squirrels can move between buildings, and party wall access may require coordinating with neighbors. Quest assesses the full structure and advises when neighbor coordination would improve outcomes.` },
      { q: `How long does it take for squirrels to exit through an exclusion door?`, a: `Most squirrels exit within 24–48 hours through a properly installed one-way exclusion funnel. In rare cases with multiple animals or anxious juveniles, it can take 72 hours. Quest confirms exit before permanently sealing the entry point, ensuring no animals are trapped inside.` },
      { q: `Can I use repellents to keep squirrels out of my Queens attic?`, a: `Commercial repellents (predator urine, ultrasonic devices) show little sustained effectiveness against determined squirrels seeking winter den sites. Physical exclusion — steel mesh sealed into the building envelope — is the only reliably permanent solution. Quest backs its exclusion work with a 12-month re-entry guarantee.` },
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
          <h2 className="text-2xl font-bold mb-2">Ready to Eliminate Squirrels in {townName}?</h2>
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
