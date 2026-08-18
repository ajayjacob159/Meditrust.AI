import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meditrustai.in'

  const staticRoutes = [
    { url: '/', changeFrequency: 'daily' as const, priority: 1.0 },
    { url: '/symptom-checker', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/lab-test-comparison', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/medication-comparison', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/dashboard', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/pricing', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/how-it-works', changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/blog', changeFrequency: 'daily' as const, priority: 0.85 },
    { url: '/blog/blood-sample-collection-at-home-pune-guide', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/blog/jan-aushadhi-generic-medicine-price-list-2026', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/blog/pune-blood-test-labs-comparison-2026', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/blog/how-to-read-cbc-thyroid-hba1c-blood-report', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/privacy', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/terms', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/hipaa', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/disclaimer', changeFrequency: 'monthly' as const, priority: 0.4 },
  ]

  const diagnosticKeywords = [
    'blood-sample-collection-at-home-pune',
    'doorstep-blood-sample-pickup-60-minutes',
    'thyrocare-vs-metropolis-pune',
    'dr-lal-pathlabs-cbc-test-cost',
    'sahyadri-hospital-blood-test-price',
    'krsnaa-diagnostics-full-body-checkup',
    'healthians-vs-redcliffe-labs-review',
    'lupin-diagnostics-pune-home-pickup',
    'jan-aushadhi-generic-medicine-savings',
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...diagnosticKeywords.map((slug) => ({
      url: `${baseUrl}/lab-test-comparison#${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
