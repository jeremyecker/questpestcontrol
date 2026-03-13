import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLeadCapturePage } from '@/lib/quest-lead-capture-data';
import { BRAND } from '@/hub.config';

interface LeadCapturePageProps {
  region: string;
  leadType: string;
}

function toTownSlug(town: string) {
  return town.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function LeadCapturePage({ region, leadType }: LeadCapturePageProps) {
  const page = getLeadCapturePage(region, leadType);
  if (!page) notFound();

  const p = page!;
  const phone = BRAND.phoneFormatted;
  const phoneHref = `tel:${BRAND.phone}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: BRAND.name,
        telephone: phone,
        url: `https://${BRAND.domain}`,
        areaServed: region,
        serviceType: p.title,
        priceRange: '$$',
        openingHours: 'Mo-Su 07:00-21:00',
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${BRAND.domain}` },
          { '@type': 'ListItem', position: 2, name: region, item: `https://${BRAND.domain}/${region}` },
          { '@type': 'ListItem', position: 3, name: p.title, item: `https://${BRAND.domain}/${region}/${leadType}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-green-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            {' / '}
            <Link href={`/${region}`} className="hover:text-white capitalize">{region}</Link>
            {' / '}
            <span>{p.title}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">{p.heroHeadline}</h1>
          <p className="text-xl text-green-200 mb-8">Licensed &amp; Insured &middot; Same-Day Service &middot; Guaranteed Results</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={phoneHref} className="bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-400 transition">
              Call {phone}
            </a>
            <Link href={`/${region}/contact`} className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-green-900 transition">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-orange-500 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-white font-semibold text-sm">
          <span>Same-Day Service Available</span>
          <span>Licensed NY DEC Technicians</span>
          <span>100% Satisfaction Guaranteed</span>
          <span>Serving All of {region.charAt(0).toUpperCase() + region.slice(1)}</span>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Intro */}
        <section className="mb-12">
          {p.intro.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4">{para}</p>
          ))}
        </section>

        {/* Services grid (only for entries that include services) */}
        {p.services && p.services.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our {p.title} Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {p.services.map((service) => (
                <div key={service} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="font-semibold text-green-900 text-sm">{service}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Quest */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose {BRAND.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Same-Day Response', 'Call before noon and we arrive the same afternoon.'],
              ['Licensed NY DEC Technicians', 'Every technician is licensed by New York State DEC and fully insured.'],
              ['Integrated Pest Management', 'We identify root causes and entry points, not just symptoms.'],
              ['Service Guarantee', 'If pests return within the treatment period, we come back at no charge.'],
              ['Family and Pet Safe', 'EPA-registered products applied with strict safety protocols.'],
              ['Local Experts', 'We know Long Island and Queens housing stock and pest pressures intimately.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {p.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Town grid */}
        {p.towns && p.towns.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">We Serve All of {region.charAt(0).toUpperCase() + region.slice(1)}</h2>
            <p className="text-gray-600 mb-4">{BRAND.name} provides {p.title.toLowerCase()} service throughout the area, including:</p>
            <div className="flex flex-wrap gap-2">
              {p.towns.map(town => (
                <Link key={town} href={`/${region}/${leadType}/${toTownSlug(town)}`}
                  className="bg-green-50 border border-green-200 text-green-800 px-3 py-1 rounded text-sm hover:bg-green-100 transition">
                  {town}
                </Link>
              ))}
              <Link href={`/${region}`}
                className="bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-green-800 transition">
                View All Towns
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-green-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
          <p className="text-green-200 mb-2">{p.urgencyText}</p>
          <p className="text-green-200 mb-6">Same-day service &middot; Licensed technicians &middot; Guaranteed results</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={phoneHref} className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-400 transition">
              {phone}
            </a>
            <Link href={`/${region}/contact`} className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-900 transition">
              Get a Free Quote
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
