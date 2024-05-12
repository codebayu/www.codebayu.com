import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'

import Container from '@/components/elements/Container'

import { METADATA } from '@/common/constant/metadata'
import { learnDto } from '@/common/helpers/dto'
import { prisma } from '@/common/libs/prisma'
import { ILearn } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  }
}

export default async function HomePage() {
  const learns = await getLearns()
  const services = await getServices()
  return (
    <>
      <Container data-aos="fade-left">
        <Home learns={learns} services={services} />
      </Container>
    </>
  )
}

async function getLearns(): Promise<ILearn[]> {
  revalidatePath('/')
  const response = await prisma.learn.findMany()
  return response.map(learnDto)
}

async function getServices(): Promise<IServices[]> {
  revalidatePath('/')
  const response = await prisma.service.findMany()
  return response
}
