import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import StructuredData from '@/components/elements/StructuredData'
import axios from 'axios'
import { Person, WithContext } from 'schema-dts'

import { CODEBAYU_SERVICE } from '@/common/constant'
import { METADATA } from '@/common/constant/metadata'
import { getRequestHeader } from '@/common/helpers'
import { careerDto } from '@/common/helpers/dto'
import { IResponseCodeBayuService } from '@/common/types'
import { ICareer, ICareerCMS } from '@/common/types/careers'

import About from '@/modules/about'

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`
  }
}

const structuredData: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: METADATA.authors.name,
  url: METADATA.authors.url,
  image: METADATA.profile,
  jobTitle: 'Software Engineer',
  gender: 'Male'
}

const PAGE_TITLE = 'About'
const PAGE_DESCRIPTION = 'A short story of me'

export default async function AboutPage() {
  const careers = await getCareers()
  return (
    <>
      <StructuredData data={structuredData} />
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About careers={careers} />
      </Container>
    </>
  )
}

async function getCareers(): Promise<ICareer[]> {
  revalidatePath('/')
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/career`, { headers })
  const data = response.data as IResponseCodeBayuService<ICareerCMS[]>
  if (data.statusCode !== 200) return []
  return data.data.map(careerDto).sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())
}
