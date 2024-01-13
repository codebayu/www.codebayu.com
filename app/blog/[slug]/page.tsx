import { Metadata } from 'next'

import { getBlogDetailServices, getCommentsServices } from '@/services/blog'
import { getBlogViews } from '@/services/view'

import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import ReaderPage from '@/common/components/elements/ReaderPage'
import { METADATA } from '@/common/constant/metadata'

type Props = {
  params: { content: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const blog = await getBlogDetailServices({ params, searchParams })
  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: blog.user.name
    },
    keywords: blog.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${blog.slug}`
    }
  }
}

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const blog = await getBlogDetailServices({ params, searchParams })
  const pageViewCount = await getBlogViews(searchParams.id as string)
  const comments = await getCommentsServices(searchParams.id as string)
  return (
    <>
      <Container data-aos="fade-left">
        <BackButton url="/blog" />
        <ReaderPage content={blog} pageViewCount={pageViewCount} comments={comments} />
      </Container>
    </>
  )
}
