import { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'

import Container from '@/components/elements/Container'
import { getLearns, getPromotions, getServices } from '@/services/codebayu'

import { METADATA } from '@/common/constant/metadata'
import { IAdsBanner } from '@/common/types/ads'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  }
}

export default async function HomePage() {
  noStore()
  const learns = await getLearns()
  const services = await getServices()
  const promotions = await getPromotions()
  const promotion = promotions.find((item: IAdsBanner) => item.showingOn.includes('/'))
  return (
    <>
      <Container data-aos="fade-left">
        <Home learns={learns} services={services} promotion={promotion} />
      </Container>
    </>
  )
}
