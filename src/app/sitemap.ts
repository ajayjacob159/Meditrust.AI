import { MetadataRoute } from 'next'
import { WOMENS_HEALTH_ARTICLES } from '@/data/womensHealthArticles'
import { WOMENS_BLOOD_TEST_ARTICLES } from '@/data/womensBloodTestsArticles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meditrustai.in'

  const staticRoutes = [
    { url: '/', changeFrequency: 'daily' as const, priority: 1.0 },
    { url: '/womens-health', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-health/blood-tests', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-health/health-library', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/reports/womens-health-india-2026', changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: '/symptom-checker', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/medivault', changeFrequency: 'daily' as const, priority: 0.92 },
    { url: '/health-score', changeFrequency: 'daily' as const, priority: 0.92 },
    { url: '/reminders', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/medication-comparison', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/find-healthcare', changeFrequency: 'daily' as const, priority: 0.92 },
    { url: '/models-overview', changeFrequency: 'weekly' as const, priority: 0.88 },
    { url: '/lab-test-comparison', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/government-schemes', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/doctors/gynecologist/pune', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/doctors/gynecologist/pcmc', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/for-doctors', changeFrequency: 'weekly' as const, priority: 0.92 },
    { url: '/corporate-wellness', changeFrequency: 'weekly' as const, priority: 0.94 },
    { url: '/pricing', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/membership', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/how-it-works', changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/blog', changeFrequency: 'daily' as const, priority: 0.85 },
    { url: '/blog/abha-card-registration-and-ayushman-bharat-guide-2026', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/blog/blood-sample-collection-at-home-pune-guide', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/blog/jan-aushadhi-generic-medicine-price-list-2026', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/blog/pune-blood-test-labs-comparison-2026', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/blog/how-to-read-cbc-thyroid-hba1c-blood-report', changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: '/privacy', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/terms', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/hipaa', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/disclaimer', changeFrequency: 'monthly' as const, priority: 0.4 },
  ]

  const womensHealthArticleRoutes = WOMENS_HEALTH_ARTICLES.map((article) => ({
    url: `/womens-health/${article.category}/${article.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const bloodTestArticleRoutes = WOMENS_BLOOD_TEST_ARTICLES.map((article) => ({
    url: `/womens-health/blood-tests/${article.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.92,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...womensHealthArticleRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...bloodTestArticleRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  ]
}
