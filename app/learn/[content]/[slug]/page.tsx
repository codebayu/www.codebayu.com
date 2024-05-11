import { Metadata } from 'next'

import BackButton from '@/components/elements/BackButton'
import Container from '@/components/elements/Container'
import ReaderPage from '@/components/elements/ReaderPage'
import { getBlogDetail, getComments } from '@/services/blog'
import { getBlogViews } from '@/services/view'

import { METADATA } from '@/common/constant/metadata'

interface Params {
  content: string
  slug: string
}

interface LearnContentDetailPageProps {
  params: Params
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: LearnContentDetailPageProps): Promise<Metadata> {
  const data = await getBlogDetail({ params, searchParams })
  return {
    title: `${data.title} ${METADATA.exTitle}`,
    description: data.description,
    openGraph: {
      url: METADATA.openGraph.url,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator,
      images: data.social_image
    },
    keywords: data.tag_list,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}/${params.slug}`
    }
  }
}

export default async function LearnContentDetailPage({ params, searchParams }: LearnContentDetailPageProps) {
  const content = await getBlogDetail({ params, searchParams })
  const pageViewCount = await getBlogViews(searchParams.id as string)
  const comments = await getComments(searchParams.id as string)
  return (
    <>
      <Container data-aos="fade-left">
        <BackButton />
        <ReaderPage comments={comments} content={content} pageViewCount={pageViewCount} />
      </Container>
    </>
  )
}
