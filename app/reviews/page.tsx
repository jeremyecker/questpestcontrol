import type { Metadata } from 'next';
import { GEO, SITE_NAME, GMB } from '@/site.config';
import { generatePageMetadata, localBusinessSchema } from '@/lib/seo';
import Schema from '@/components/seo/Schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CTABanner from '@/components/sections/CTABanner';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = generatePageMetadata({
  title: `Reviews — ${GMB.rating} Stars`,
  description: `Read real reviews from homeowners across ${GEO.region}. ${SITE_NAME} is rated ${GMB.rating}/5 with verified Google reviews.`,
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <Schema data={localBusinessSchema()} />
      <Breadcrumbs items={[{ label: 'Reviews' }]} />
      <TrustBar />
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        {`Reviews — ${GMB.rating} Stars`}
      </h1>
      <ReviewsSection limit={6} title={`Real Reviews from ${GEO.region} Homeowners`} />
      <CTABanner />
    </>
  );
}
