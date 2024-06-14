import { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'

import Container from '@/components/elements/Container'
import StructuredData from '@/components/elements/StructuredData'
import { getLearns, getPromotions, getServices } from '@/services/codebayu'
import { Person, WithContext } from 'schema-dts'

import { METADATA } from '@/common/constant/metadata'
import { IAdsBanner } from '@/common/types/ads'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
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

export default async function HomePage() {
  noStore()
  const learns = await getLearns()
  const services = await getServices()
  const promotions = await getPromotions()
  const promotion = promotions.find((item: IAdsBanner) => item.showingOn.includes('/'))
  return (
    <>
      <StructuredData data={structuredData} />
      <Container data-aos="fade-left">
        <Home learns={learns} services={services} promotion={promotion} />
      </Container>
    </>
  )
}
