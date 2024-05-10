import { Metadata } from 'next'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'

import { METADATA } from '@/common/constant/metadata'
import { careerDto } from '@/common/helpers/dto'
import { prisma } from '@/common/libs/prisma'
import { CareerProps } from '@/common/types/careers'

import About from '@/modules/about'

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`
  }
}

const PAGE_TITLE = 'About'
const PAGE_DESCRIPTION = 'A short story of me'

export default async function AboutPage() {
  const careers = await getCareers()
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About careers={careers} />
      </Container>
    </>
  )
}

async function getCareers(): Promise<CareerProps[]> {
  const response = await prisma.career.findMany({ orderBy: { startDate: 'desc' } })
  return response.map(careerDto)
}
