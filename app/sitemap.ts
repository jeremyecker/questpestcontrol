import { MetadataRoute } from 'next';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import { getAllBlogPosts } from '@/lib/blog-posts';
import { LEAD_CAPTURE_REGIONS, LEAD_CAPTURE_INTENT_SLUGS } from '@/lib/quest-lead-capture-data';
import { COMMERCIAL_VERTICALS } from '@/lib/quest-commercial-data';

const TOP_LEVEL_LEAD_CAPTURE_SLUGS = [
  'pest-control-near-me',
  'exterminator-near-me',
  'emergency-pest-control',
  'same-day-pest-control',
  'bed-bug-exterminator',
  'free-pest-inspection',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

  // Top-level lead capture pages
  for (const slug of TOP_LEVEL_LEAD_CAPTURE_SLUGS) {
    entries.push({
      url: `${base}/${slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  // Individual service pages
  for (const service of SERVICES) {
    entries.push({
      url: `${base}/services/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const region of REGIONS) {
    const regionBase = `${base}/${region.slug}`;
    entries.push(
      { url: `${regionBase}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${regionBase}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${regionBase}/service-areas/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${regionBase}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
      { url: `${regionBase}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    );

    for (const service of SERVICES) {
      entries.push({
        url: `${regionBase}/services/${service.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    for (const town of region.towns) {
      const townSlug = town.toLowerCase().replace(/\s+/g, '-');
      entries.push({
        url: `${regionBase}/${townSlug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Lead capture pages — 3 regions x 6 intents = 18 pages
  for (const region of LEAD_CAPTURE_REGIONS) {
    for (const intent of LEAD_CAPTURE_INTENT_SLUGS) {
      entries.push({
        url: `${base}/${region}/${intent}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Static pages
  entries.push(
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/terms/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/reviews/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/service-areas/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  );

  // Commercial pages — index + 10 verticals
  entries.push({
    url: `${base}/commercial/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  for (const vertical of COMMERCIAL_VERTICALS) {
    entries.push({
      url: `${base}/commercial/${vertical.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  }

  const blogPosts = getAllBlogPosts();
  for (const post of blogPosts) {
    entries.push({
      url: `https://questpest.net/blog/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Service+city pages (5 services x all towns)
  const SERVICE_SLUGS = ['bed-bug-exterminator', 'raccoon-removal', 'rodent-control', 'squirrel-removal', 'wildlife-removal'];
  entries.push(
    ...REGIONS.flatMap((region: { slug: string; towns: string[] }) =>
      SERVICE_SLUGS.flatMap(service =>
        region.towns.map((town: string) => ({
          url: `${base}/${region.slug}/${service}/${town.toLowerCase().replace(/\s+/g, '-')}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        }))
      )
    )
  );

  return entries;
}
