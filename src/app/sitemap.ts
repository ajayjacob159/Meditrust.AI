import { MetadataRoute } from 'next'
import { WOMENS_HEALTH_ARTICLES } from '@/data/womensHealthArticles'
import { WOMENS_BLOOD_TEST_ARTICLES } from '@/data/womensBloodTestsArticles'
import { WOMENS_HEALTH_MASTER_SEGMENTS } from '@/data/womensHealthMasterSegments'
import { MARKETPLACE_CATEGORIES, ALL_MARKETPLACE_PRODUCTS } from '@/data/marketplaceCatalog'
import { ALL_1000_FERTILITY_QUESTIONS } from '@/data/fertilityQuestionsData'
import { blogArticles } from '@/data/blogArticles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meditrustai.in'

  const staticRoutes = [
    { url: '/', changeFrequency: 'daily' as const, priority: 1.0 },
    { url: '/womens-health', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-health/tools', changeFrequency: 'daily' as const, priority: 0.99 },
    { url: '/medimom', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/corpo-mom', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-health/academy', changeFrequency: 'weekly' as const, priority: 0.98 },
    { url: '/fertility-qa', changeFrequency: 'daily' as const, priority: 0.99 },
    { url: '/marketplace', changeFrequency: 'daily' as const, priority: 0.99 },
    { url: '/marketplace/cart', changeFrequency: 'daily' as const, priority: 0.8 },
    { url: '/marketplace/checkout', changeFrequency: 'daily' as const, priority: 0.8 },
    { url: '/marketplace/orders', changeFrequency: 'daily' as const, priority: 0.85 },
    { url: '/marketplace/bundles', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/marketplace/brands', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/womens-marketplace', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/account', changeFrequency: 'daily' as const, priority: 0.92 },
    { url: '/login', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/signup', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/bot', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-health/blood-tests', changeFrequency: 'daily' as const, priority: 0.98 },
    { url: '/womens-schemes-funds', changeFrequency: 'daily' as const, priority: 0.96 },
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
    { url: '/blog', changeFrequency: 'daily' as const, priority: 0.88 },
    { url: '/privacy', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/terms', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/hipaa', changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: '/disclaimer', changeFrequency: 'monthly' as const, priority: 0.4 },
  ]

  const fertilityQuestionRoutes = ALL_1000_FERTILITY_QUESTIONS.slice(0, 200).map((q) => ({
    url: `/fertility-qa/${q.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.94,
  }))

  const marketplaceCategoryRoutes = MARKETPLACE_CATEGORIES.map((cat) => ({
    url: `/marketplace/${cat.slug}`,
    changeFrequency: 'daily' as const,
    priority: 0.96,
  }))

  const marketplaceProductRoutes = ALL_MARKETPLACE_PRODUCTS.map((prod) => ({
    url: `/marketplace/product/${prod.slug}`,
    changeFrequency: 'daily' as const,
    priority: 0.95,
  }))

  const blogArticleRoutes = blogArticles.map((article) => ({
    url: `/blog/${article.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.92,
  }))

  const segmentRoutes = WOMENS_HEALTH_MASTER_SEGMENTS.map((segment) => ({
    url: `/womens-health/segments/${segment.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.94,
  }))

  const womensHealthArticleRoutes = WOMENS_HEALTH_ARTICLES.map((article) => ({
    url: `/womens-health/${article.category}/${article.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const bloodTestArticleRoutes = WOMENS_BLOOD_TEST_ARTICLES.map((article) => ({
    url: `/womens-health/blood-tests/${article.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const allRoutes = [
    ...staticRoutes,
    ...fertilityQuestionRoutes,
    ...marketplaceCategoryRoutes,
    ...marketplaceProductRoutes,
    ...segmentRoutes,
    ...blogArticleRoutes,
    ...womensHealthArticleRoutes,
    ...bloodTestArticleRoutes,
  ]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
