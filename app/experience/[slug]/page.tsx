import { Metadata } from 'next'

import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import { CAREERS } from '@/common/constant/careers'
import { METADATA } from '@/common/constant/metadata'
import { CareerProps } from '@/common/types/careers'

import ExperienceDetail from '@/modules/experience'

export const metadata: Metadata = {
  title: `Experience ${METADATA.exTitle}`,
  description: 'My proffesional carrer journey in detail as software development',
  keywords: 'blog code bayu, codebayu',
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`
  }
}

export default async function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const careers: CareerProps = CAREERS.find(item => item.slug === params.slug) as CareerProps
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton />
        <ExperienceDetail {...careers} />
      </Container>
    </>
  )
}
