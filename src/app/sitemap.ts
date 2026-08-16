import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meditrustai.com'

  const staticRoutes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/symptom-checker', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/medication-comparison', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/lab-test-comparison', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/how-it-works', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/hipaa', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/disclaimer', changeFrequency: 'yearly' as const, priority: 0.4 },
  ]

  const blogSlugs = [
    'metformin-vs-berberine',
    'home-blood-test-accuracy',
    'best-thyroid-tests-2026',
    'statin-comparison',
    'ai-symptom-checker-privacy',
    'hba1c-interpretation',
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
