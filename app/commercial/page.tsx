import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import { COMMERCIAL_VERTICALS } from '@/lib/quest-commercial-data';

export const metadata: Metadata = {
  title: 'Commercial Pest Control: Long Island and Queens',
  description:
    'Professional commercial pest control programs for Long Island and Queens businesses. Restaurants, hotels, apartments, schools, healthcare, retail, offices, and more. Licensed, insured. Call (631) 228-4498.',
};

export default function CommercialIndexPage() {
  const phoneHref = `tel:+1${BRAND.phone}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    telephone: BRAND.phoneFormatted,
    url: `https://${BRAND.domain}/commercial`,
    areaServed: ['Suffolk County, NY', 'Nassau County, NY', 'Queens, NY'],
    description:
      'Quest Pest Control provides professional commercial pest management programs for businesses across Long Island and Queens.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <span className="text-gray-900">Commercial Pest Control</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Commercial Pest Control: Long Island and Queens
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Quest Pest Control has delivered professional commercial pest management across Nassau County, Suffolk County,
            and Queens since {BRAND.yearFounded}. Our licensed technicians design industry-specific programs for the full
            range of commercial environments — from restaurant kitchens and hospital campuses to apartment buildings, retail
            storefronts, and Hamptons short-term rentals. Every commercial account receives thorough documentation,
            compliance-ready service records, and a program built around your industry's specific regulatory and operational
            requirements. We understand that pest activity in a commercial setting costs more than an exterminator's bill —
            it costs reputation, compliance standing, and customer trust. Quest's commercial programs are designed to protect
            all three through proactive, scheduled pest management and rapid response when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
            >
              Get a Commercial Quote
            </Link>
            <a
              href={phoneHref}
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl transition-colors"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Vertical Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commercial Pest Control by Industry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_VERTICALS.map(vertical => (
              <Link
                key={vertical.slug}
                href={`/commercial/${vertical.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-6 group flex flex-col"
              >
                <div className="text-4xl mb-3">{vertical.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                  {vertical.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {vertical.cardDescription}
                </p>
                <div className="mt-4 text-brand-primary font-semibold text-sm group-hover:underline">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Quest Commercial */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Long Island and Queens Businesses Choose Quest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Industry-Specific Documentation</h3>
              <p className="text-gray-600 text-sm">Service records formatted for DOH inspections, Joint Commission requirements, HPD compliance, and IPM program documentation.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Priority Commercial Response</h3>
              <p className="text-gray-600 text-sm">Commercial accounts receive priority scheduling for active pest situations — same-day response available for urgent compliance needs.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="font-bold text-gray-900 mb-2">Full Service Area Coverage</h3>
              <p className="text-gray-600 text-sm">Technicians covering all of Nassau County, Suffolk County, and Queens — from Montauk to Astoria, no location too far.</p>
            </div>
          </div>
        </div>

        {/* Bottom Dual CTA */}
        <div className="text-center bg-gradient-to-br from-green-900 to-green-700 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Protect Your Business. Protect Your Reputation.</h2>
          <p className="text-green-100 mb-8 text-lg max-w-xl mx-auto">
            Contact Quest Pest Control today for a customized commercial pest management program across Long Island and Queens.
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
