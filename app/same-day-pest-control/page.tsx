import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';

export const metadata: Metadata = {
  title: 'Same Day Pest Control | Long Island & Queens NY | Quest Pest Control',
  description: 'Same-day pest control across Suffolk County, Nassau County & Queens. Licensed local technicians ready today. Call (631) 228-4498.',
  alternates: {
    canonical: 'https://questpest.net/same-day-pest-control/',
  },
};

const REGIONS = [
  {
    slug: 'suffolk',
    name: 'Suffolk County',
    desc: 'Serving 101 communities across Suffolk — from Huntington to Riverhead.',
    towns: ['Huntington', 'Babylon', 'Smithtown', 'Islip', 'Brookhaven', 'Patchogue'],
  },
  {
    slug: 'nassau',
    name: 'Nassau County',
    desc: 'Covering all 69 Nassau communities — from Garden City to Long Beach.',
    towns: ['Garden City', 'Hempstead', 'Levittown', 'Freeport', 'Massapequa', 'Great Neck'],
  },
  {
    slug: 'queens',
    name: 'Queens',
    desc: 'Full Queens coverage — from Astoria and Flushing to Jamaica and Howard Beach.',
    towns: ['Flushing', 'Jamaica', 'Astoria', 'Forest Hills', 'Jackson Heights', 'Howard Beach'],
  },
];

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ["LocalBusiness", "PestControlService"],
    name: 'Quest Pest Control',
    url: 'https://questpest.net',
    telephone: '+16312284498',
    image: 'https://questpest.net/images/og-default.jpg',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What areas does Quest Pest Control serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quest Pest Control serves Suffolk County (101 communities), Nassau County (69 communities), and all of Queens. Call (631) 228-4498 for service.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can Quest respond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer same-day service availability across Suffolk County, Nassau County, and Queens. Call early for the best availability.',
        },
      },
    ],
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

      {/* Hero */}
      <section className="bg-[#1A7A4C] text-white py-16 px-4" aria-label="Hero">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-green-200 mb-3 font-medium">
            Suffolk County · Nassau County · Queens — Licensed &amp; Local
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Same Day Pest Control — Suffolk County, Nassau County &amp; Queens
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for pests to spread. Quest offers same-day service across 203 Long Island and Queens communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6312284498"
              className="inline-flex items-center gap-2 bg-white text-[#1A7A4C] font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              📞 (631) 228-4498
            </a>
            <Link
              href="/suffolk/contact/"
              className="inline-block border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-4 px-4">
        <ul className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-700 font-medium">
          {['Licensed & Insured', 'Same-Day Service Available', 'Free Inspection', 'Local Technicians', 'Satisfaction Guaranteed'].map(item => (
            <li key={item} className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#1A7A4C]" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Region cards */}
      <section className="py-14 px-4" aria-label="Service regions">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Choose Your Region
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REGIONS.map(region => (
              <div key={region.slug} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{region.desc}</p>
                <ul className="text-xs text-gray-500 space-y-1 mb-5">
                  {region.towns.map(t => <li key={t}>📍 {t}</li>)}
                </ul>
                <Link
                  href={`/${region.slug}/same-day-pest-control/`}
                  className="block w-full text-center bg-[#1A7A4C] text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  View {region.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50" aria-label="FAQ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What areas does Quest Pest Control serve?</h3>
              <p className="text-gray-600 text-sm">Quest Pest Control serves Suffolk County (101 communities), Nassau County (69 communities), and all of Queens. Call (631) 228-4498 for service in your area.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How fast can Quest respond?</h3>
              <p className="text-gray-600 text-sm">We offer same-day service availability across Suffolk County, Nassau County, and Queens. Call early in the day for the best availability — we confirm your appointment window when you call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A7A4C] py-14 px-4 text-white text-center" aria-label="CTA">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-green-100 mb-8">Same-day service available across Long Island and Queens.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/suffolk/contact/" className="bg-white text-[#1A7A4C] font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-50 transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:6312284498" className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
              📞 (631) 228-4498
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
