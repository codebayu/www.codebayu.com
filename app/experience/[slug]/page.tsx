import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'

import BackButton from '@/components/elements/BackButton'
import Container from '@/components/elements/Container'
import axios from 'axios'

import { CODEBAYU_SERVICE } from '@/common/constant'
import { METADATA } from '@/common/constant/metadata'
import { getRequestHeader } from '@/common/helpers'
import { careerDto } from '@/common/helpers/dto'
import { IResponseCodeBayuService } from '@/common/types'
import { CareerProps, ICareerCMS } from '@/common/types/careers'

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
  revalidatePath('/experience')
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/career`, { headers })
  const data = response.data as IResponseCodeBayuService<ICareerCMS[]>
  if (data.statusCode !== 200) return []
  return data.data.map(careerDto).sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())
}
