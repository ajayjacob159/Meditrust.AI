import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_MARKETPLACE_PRODUCTS, MarketplaceProductItem } from '@/data/marketplaceCatalog'
import ProductDetailClient from './ProductDetailClient'

export function generateStaticParams() {
  return ALL_MARKETPLACE_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = ALL_MARKETPLACE_PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `${product.name} — Buy Online at Meditrust Sakhi™ (2026)`,
    description: `${product.shortDescription}. Dermatologically tested, 100% toxin-free period & women's healthcare essentials.`,
    keywords: [
      product.name,
      product.brand,
      product.category,
      product.subcategory,
      'Meditrust Sakhi',
      'Buy Rash Free Pads',
      'Period Care Online'
    ]
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = ALL_MARKETPLACE_PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) {
    notFound()
  }

  const crossSellProducts = ALL_MARKETPLACE_PRODUCTS.filter((p) =>
    product.crossSellIds.includes(p.id)
  )

  return (
    <ProductDetailClient
      product={product}
      crossSellProducts={crossSellProducts}
    />
  )
}
