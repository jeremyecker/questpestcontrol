import type { Metadata } from 'next';
import { getLeadCapturePage } from '@/lib/quest-lead-capture-data';
import LeadCapturePage from '@/components/LeadCapturePage';
import { SITE_NAME, SITE_URL } from '@/site.config';
import { canonicalUrl } from '@/lib/utils';

const LEAD_TYPE = 'wildlife-removal';

export async function generateMetadata(
  { params }: { params: Promise<{ region: string }> }
): Promise<Metadata> {
  const { region } = await params;
  const page = getLeadCapturePage(region, LEAD_TYPE);
  if (!page) return {};
  const canonical = canonicalUrl(`/${region}/${LEAD_TYPE}`);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png` }],
    },
  };
}

export async function generateStaticParams() {
  const regions = ['suffolk', 'nassau', 'queens'];
  return regions.map(region => ({ region }));
}

export default async function Page({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  return <LeadCapturePage region={region} leadType={LEAD_TYPE} />;
}
