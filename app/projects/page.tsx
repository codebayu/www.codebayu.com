import { Metadata } from 'next'

import { getCodeBayuData } from '@/services/codebayu'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'
import { IProjectItem } from '@/common/types/projects'

import Projects from '@/modules/projects'

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: 'Software Engineer portfolio ideas',
  keywords: 'portfolio frontend developer',
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`
  }
}

const PAGE_TITLE = 'Projects'
const PAGE_DESCRIPTION = 'Showcasing my passion for technology, design, and problem-solving through code.'

export default async function ProjectsPage() {
  const projects = await getProjets()
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects projects={projects} />
      </Container>
    </>
  )
}

async function getProjets(): Promise<IProjectItem[]> {
  const response = await getCodeBayuData()
  return response.projects
}
