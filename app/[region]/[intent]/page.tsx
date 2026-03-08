import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLeadCapturePage, LEAD_CAPTURE_REGIONS, LEAD_CAPTURE_INTENT_SLUGS } from '@/lib/quest-lead-capture-data';
import { BRAND } from '@/hub.config';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

// ── Static params: 3 regions × 6 intents = 18 pages ──────────────────────────
export async function generateStaticParams() {
  const params: { region: string; intent: string }[] = [];
  for (const region of LEAD_CAPTURE_REGIONS) {
    for (const intent of LEAD_CAPTURE_INTENT_SLUGS) {
      params.push({ region, intent });
    }
  }
  return params;
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; intent: string }>;
}): Promise<Metadata> {
  const { region, intent } = await params;
  const page = getLeadCapturePage(region, intent);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://${BRAND.domain}/${region}/${intent}/`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function LeadCapturePage({
  params,
}: {
  params: Promise<{ region: string; intent: string }>;
}) {
  const { region, intent } = await params;
  const page = getLeadCapturePage(region, intent);
  if (!page) return notFound();

  // ── JSON-LD ────────────────────────────────────────────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: BRAND.name,
    url: `https://${BRAND.domain}`,
    telephone: BRAND.phoneFormatted,
    email: BRAND.email,
    areaServed: page.towns.map((town) => ({
      '@type': 'City',
      name: town,
    })),
    priceRange: '$$',
    description: page.metaDescription,
  };

  const regionLabel =
    page.region === 'suffolk'
      ? 'Suffolk County'
      : page.region === 'nassau'
      ? 'Nassau County'
      : 'Queens';

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-[#1A7A4C] text-white py-16 px-4"
        aria-label="Hero"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-green-200 mb-3 font-medium">
            {regionLabel} · Licensed &amp; Local
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {page.heroHeadline}
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {page.urgencyText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`/${page.region}/contact/`}
              className="inline-block bg-white text-[#1A7A4C] font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {BRAND.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-gray-50 border-b border-gray-200 py-4 px-4">
        <ul className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-700 font-medium">
          {[
            'Licensed & Insured',
            'Same-Day Service Available',
            'Free Inspection',
            'Local Technicians',
            'Satisfaction Guaranteed',
          ].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#1A7A4C]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Intro ── */}
      <section className="py-14 px-4" aria-label="About this service">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{page.title}</h2>
          {page.intro.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── Towns grid ── */}
      <section className="py-12 px-4 bg-gray-50" aria-label="Service areas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Serving Communities Across {regionLabel}
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Our licensed technicians serve all of {regionLabel} — including these key communities:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="list">
            {page.towns.map((town) => (
              <li
                key={town}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm font-medium shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#1A7A4C] flex-shrink-0" aria-hidden="true" />
                {town}
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-500 text-sm mt-6">
            Don&rsquo;t see your community listed?{' '}
            <a href={`tel:${BRAND.phone}`} className="text-[#1A7A4C] underline font-medium">
              Call us
            </a>{' '}
            — we likely serve your area.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-14 px-4" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {page.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual CTA ── */}
      <section
        className="bg-[#1A7A4C] py-14 px-4 text-white text-center"
        aria-label="Call to action"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Solve Your Pest Problem?
          </h2>
          <p className="text-green-100 mb-8 text-base">
            {page.urgencyText} Our {regionLabel} team is standing by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`/${page.region}/contact/`}
              className="inline-block bg-white text-[#1A7A4C] font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {BRAND.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
