import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stillwithyou.app';

  // Standard static routes
  const routes = ['', '/about', '/resources', '/privacy-policy', '/terms'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Path entry points
  const pathRoutes = [
    '/path/not-sure',
    '/path/alone',
    '/path/diagnosed',
    '/path/discharged',
    '/path/supporting',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...pathRoutes];
}
