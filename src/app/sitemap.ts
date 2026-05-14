import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://olytavern.com',
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
