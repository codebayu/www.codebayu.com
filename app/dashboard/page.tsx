import { Metadata } from 'next'

import { getCodewarsServices } from '@/services/codewars'
import { getGithubData } from '@/services/github'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'
import { CodewarsData } from '@/common/types/codewars'

import Dashboard from '@/modules/dashboard'

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: 'My activity dashboard as software engineer',
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`
  }
}

const PAGE_TITLE = 'Dashboard'
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.'

export default async function DahboardPage() {
  const githubData = await getGithubData()
  const codewarsData: CodewarsData = await getCodewarsServices()
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard githubData={githubData} codewarsData={codewarsData} />
      </Container>
    </>
  )
}
