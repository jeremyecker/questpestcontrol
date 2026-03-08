import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { COMMERCIAL_VERTICALS, getCommercialVertical } from '@/lib/quest-commercial-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getCommercialVertical(slug);
  if (!vertical) return {};
  return {
    title: vertical.metaTitle,
    description: vertical.metaDescription,
  };
}

export function generateStaticParams() {
  return COMMERCIAL_VERTICALS.map(v => ({ slug: v.slug }));
}

export default async function CommercialVerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getCommercialVertical(slug);
  if (!vertical) notFound();

  const phoneHref = `tel:+1${BRAND.phone}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    telephone: BRAND.phoneFormatted,
    url: `https://${BRAND.domain}/commercial/${vertical.slug}`,
    areaServed: ['Suffolk County, NY', 'Nassau County, NY', 'Queens, NY'],
    description: vertical.metaDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vertical.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/commercial" className="hover:text-brand-primary">Commercial</Link>
          {' → '}
          <span className="text-gray-900">{vertical.title}</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-br from-green-900 to-green-700 text-white rounded-2xl p-10 mb-12 text-center">
          <div className="text-6xl mb-4">{vertical.icon}</div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{vertical.title}</h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">{vertical.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={phoneHref}
              className="inline-block bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              📞 {BRAND.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Commercial Quote
            </Link>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">{vertical.intro}</p>
        </div>

        {/* Industry Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vertical.challenges.map((challenge, i) => (
              <div
                key={i}
                className="bg-red-50 border border-red-100 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Solutions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Quest Addresses These Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vertical.solutions.map((solution, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-100 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Service Areas */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {vertical.serviceAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700"
              >
                📍 {area}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">
            Quest Pest Control serves all of Suffolk County, Nassau County, and Queens.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {vertical.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Quest */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Quest Pest Control?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✅</span> Licensed and insured commercial pest management professionals</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✅</span> Serving Suffolk County, Nassau County, and Queens since {BRAND.yearFounded}</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✅</span> Industry-specific documentation and compliance support</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✅</span> Flexible scheduling — early morning, evenings, and weekends available</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✅</span> Priority response for active pest situations</li>
          </ul>
        </div>

        {/* Dual CTA */}
        <div className="text-center bg-gradient-to-br from-green-900 to-green-700 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
          <p className="text-green-100 mb-8 text-lg max-w-xl mx-auto">
            Get a customized commercial pest management quote for your Long Island or Queens business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
            >
              Get a Commercial Quote
            </Link>
            <a
              href={phoneHref}
              className="inline-block bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-10 rounded-lg text-xl transition-colors"
            >
              {BRAND.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
