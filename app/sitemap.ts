import { MetadataRoute } from 'next';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import { getAllBlogPosts } from '@/lib/blog-posts';
import { LEAD_CAPTURE_REGIONS, LEAD_CAPTURE_INTENT_SLUGS } from '@/lib/quest-lead-capture-data';
import { COMMERCIAL_VERTICALS } from '@/lib/quest-commercial-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

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

  // Lead capture pages — 3 regions × 6 intents = 18 pages
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
      url: `https://questpest.net/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
