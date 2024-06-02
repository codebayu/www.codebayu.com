import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'

import Container from '@/components/elements/Container'
import axios from 'axios'

import { CODEBAYU_SERVICE } from '@/common/constant'
import { METADATA } from '@/common/constant/metadata'
import { getRequestHeader } from '@/common/helpers'
import { learnDto } from '@/common/helpers/dto'
import { IResponseCodeBayuService } from '@/common/types'
import { ILearn, ILearnCMS } from '@/common/types/learn'
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
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/learn`, { headers })
  const data = response.data as IResponseCodeBayuService<ILearnCMS[]>
  if (data.statusCode !== 200) return []
  return data.data.map(learnDto)
}

async function getServices(): Promise<IServices[]> {
  revalidatePath('/')
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/service`, { headers })
  const data = response.data as IResponseCodeBayuService<IServices[]>
  if (data.statusCode !== 200) return []
  return data.data
}
