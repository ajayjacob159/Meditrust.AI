import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  MARKETPLACE_CATEGORIES,
  ALL_MARKETPLACE_PRODUCTS,
  MarketplaceCategoryDef,
  MarketplaceProductItem
} from '@/data/marketplaceCatalog'
import CategoryPageClient from './CategoryPageClient'

export function generateStaticParams() {
  return MARKETPLACE_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = MARKETPLACE_CATEGORIES.find((c) => c.slug === params.category)
  if (!cat) {
    return { title: 'Category Not Found' }
  }

  return {
    title: `${cat.name} — Meditrust Women's Health Marketplace™ (2026)`,
    description: `${cat.shortDescription}. Medically vetted by Dr. Arya MD. 100% Toxin-free, rash-free period care & clinical wellness.`,
    keywords: [
      cat.name,
      `Best ${cat.name} India`,
      'Meditrust Sakhi Period Care',
      'Rash-Free Pads',
      'Cramp Heat Patches',
      'PCOS Supplements'
    ]
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryDef = MARKETPLACE_CATEGORIES.find((c) => c.slug === params.category)
  if (!categoryDef) {
    notFound()
  }

  const initialProducts = ALL_MARKETPLACE_PRODUCTS.filter(
    (p) => p.category === categoryDef.slug || categoryDef.slug === 'bundles'
  )

  return (
    <CategoryPageClient
      category={categoryDef}
      allCategories={MARKETPLACE_CATEGORIES}
      initialProducts={initialProducts}
    />
  )
}
