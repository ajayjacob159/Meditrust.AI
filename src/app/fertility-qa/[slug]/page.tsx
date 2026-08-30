import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ALL_1000_FERTILITY_QUESTIONS,
  CORE_FERTILITY_QUESTIONS,
  FertilityQuestionItem
} from '@/data/fertilityQuestionsData'
import FertilityQuestionClient from './FertilityQuestionClient'

export function generateStaticParams() {
  // Pre-render core questions for SSG
  return CORE_FERTILITY_QUESTIONS.map((q) => ({
    slug: q.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = ALL_1000_FERTILITY_QUESTIONS.find((q) => q.slug === params.slug)
  if (!item) {
    return { title: 'Fertility Question Not Found' }
  }

  return {
    title: `${item.question} — Answered by Dr. Arya MD (2026)`,
    description: `${item.shortAnswer.slice(0, 160)}... Clinical guidelines, video script, Instagram breakdown, and Jan Aushadhi generic savings.`,
    keywords: [
      item.question,
      item.category,
      'IVF Questions India',
      'Dr Arya Fertility',
      'AMH Levels India',
      'IVF Cost in India 2026',
      'PCOS Fertility Guide'
    ],
    openGraph: {
      title: `${item.question} — Meditrust Fertility AI`,
      description: item.shortAnswer,
      type: 'article',
      url: `https://www.meditrustai.in/fertility-qa/${item.slug}`,
    }
  }
}

export default function FertilityQuestionPage({ params }: { params: { slug: string } }) {
  const questionItem = ALL_1000_FERTILITY_QUESTIONS.find((q) => q.slug === params.slug)
  if (!questionItem) {
    notFound()
  }

  const relatedQuestions = ALL_1000_FERTILITY_QUESTIONS.filter(
    (q) => questionItem.relatedSlugs.includes(q.slug) || (q.categorySlug === questionItem.categorySlug && q.id !== questionItem.id)
  ).slice(0, 4)

  return (
    <FertilityQuestionClient
      question={questionItem}
      relatedQuestions={relatedQuestions}
    />
  )
}
