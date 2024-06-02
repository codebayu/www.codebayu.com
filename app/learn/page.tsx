import { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import { getLearns } from '@/services/codebayu'

import { METADATA } from '@/common/constant/metadata'

import LearnModule from '@/modules/learn'

export const metadata: Metadata = {
  title: `Learn ${METADATA.exTitle}`,
  description: 'Programming tips for software developer',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript',
  alternates: {
    canonical: `${process.env.DOMAIN}/learn`
  }
}

const PAGE_TITLE = 'Learn'
const PAGE_DESCRIPTION =
  "It's not a course, it's my personal learning notes. But if you are interested, let's learn together."

export default async function LearnPage() {
  noStore()
  const learns = await getLearns()
  const filteredContents = learns.filter(content => content.is_show) || []
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule contents={filteredContents} />
      </Container>
    </>
  )
}
