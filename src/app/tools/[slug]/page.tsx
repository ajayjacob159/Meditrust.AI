import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FloCalculatorsHubClient from '../FloCalculatorsHubClient'
import { FLO_10_CALCULATORS } from '@/data/floCalculatorsData'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FLO_10_CALCULATORS.map((calc) => ({
    slug: calc.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const calc = FLO_10_CALCULATORS.find((c) => c.slug === slug)
  if (!calc) return { title: 'Calculator Not Found | Meditrust AI' }

  return {
    title: `${calc.title} | Meditrust AI`,
    description: calc.description,
    keywords: [
      calc.title,
      `${calc.shortTitle} online`,
      `${calc.shortTitle} India`,
      'Flo health calculators',
      'Dr Arya clinical calculator'
    ],
    openGraph: {
      title: `${calc.title} — Meditrust AI`,
      description: calc.description,
      url: `https://www.meditrustai.in/tools/${calc.slug}`,
      siteName: 'Meditrust AI',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.meditrustai.in/tools/${calc.slug}`,
    }
  }
}

export default async function CalculatorSubPage({ params }: Props) {
  const { slug } = await params
  const calc = FLO_10_CALCULATORS.find((c) => c.slug === slug)
  if (!calc) {
    notFound()
  }

  return <FloCalculatorsHubClient initialSlug={slug} />
}
