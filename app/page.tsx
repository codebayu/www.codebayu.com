import { Metadata } from 'next'

import { getCodeBayuData } from '@/services/codebayu'

import Container from '@/common/components/elements/Container'
import { METADATA } from '@/common/constant/metadata'
import { CareerProps } from '@/common/types/careers'
import { ContentProps } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  }
}

export default async function HomePage() {
  const careers = await getCareers()
  const learns = await getLearns()
  const services = await getServices()
  return (
    <>
      <Container data-aos="fade-left">
        <Home careers={careers} learns={learns} services={services} />
      </Container>
    </>
  )
}

async function getCareers(): Promise<CareerProps[]> {
  const response = await getCodeBayuData()
  return response.careers
}

async function getLearns(): Promise<ContentProps[]> {
  const response = await getCodeBayuData()
  return response.learns
}

async function getServices(): Promise<IServices[]> {
  const response = await getCodeBayuData()
  return response.services
}
