import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import Container from '@/components/elements/Container'
import { getBlogData } from '@/services/blog'

import { BLOG_LINK } from '@/common/constant/menu'
import { METADATA } from '@/common/constant/metadata'
import { BlogItem } from '@/common/types/blog'

import Blog from '@/modules/blog'

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: 'My blogs content about programming and software development',
  keywords: 'blog code bayu, codebayu',
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`
  }
}

export default async function BlogPage({ searchParams }: { searchParams: { category: string } }) {
  if (!searchParams.category) {
    redirect('/blog?category=home')
  }
  const blogs = await getBlog(searchParams.category)
  return (
    <Container data-aos="fade-left">
      <Blog blogs={blogs} />
    </Container>
  )
}

async function getBlog(category: string) {
  revalidatePath('/blog')
  const blogs = await getBlogData()

  const data: BlogItem[] = blogs?.filter((blog: BlogItem) => {
    const activeId = BLOG_LINK.find(link => link.value === category)?.id
    return blog.collection_id === activeId
  })
  return data
}
