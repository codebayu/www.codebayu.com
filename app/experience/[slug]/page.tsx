import { Metadata } from 'next'

import BackButton from '@/components/elements/BackButton'
import Container from '@/components/elements/Container'

import { METADATA } from '@/common/constant/metadata'
import { careerDto } from '@/common/helpers/dto'
import { prisma } from '@/common/libs/prisma'
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
  const careers = await getCareers()
  const career: CareerProps = careers.find(item => item.slug === params.slug) as CareerProps
  return (
    <>
      <Container data-aos="fade-left">
        <BackButton />
        <ExperienceDetail {...career} />
      </Container>
    </>
  )
}

async function getCareers(): Promise<CareerProps[]> {
  const response = await prisma.career.findMany({ orderBy: { startDate: 'desc' } })
  return response.map(careerDto)
}
