import { Metadata } from 'next'

import BackButton from '@/components/elements/BackButton'
import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import { getCodeBayuData } from '@/services/codebayu'

import { METADATA } from '@/common/constant/metadata'
import loadMdxFiles from '@/common/libs/mdx'
import { IProjectItem } from '@/common/types/projects'

import ProjectDetail from '@/modules/projects/components/ProjectDetail'

interface ProjectsDetailPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ProjectsDetailPageProps): Promise<Metadata> {
  const project = await getProjectDetail(params.slug)
  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`
    }
  }
}

export default async function ProjectDetailPage({ params }: ProjectsDetailPageProps) {
  const detail = await getProjectDetail(params.slug)
  return (
    <>
      <Container data-aos="fade-left">
        <BackButton url="/projects" />
        <PageHeading title={detail.title} description={detail.description} />
        <ProjectDetail {...detail} />
      </Container>
    </>
  )
}

async function getProjectDetail(slug: string): Promise<IProjectItem> {
  const response = await getCodeBayuData()
  const projects = response.projects

  const project = projects.find(item => item.slug === slug) as IProjectItem
  const contents = loadMdxFiles(slug, 'projects')
  const content = contents.find(item => item.slug === slug)
  const newResponse = { ...project, content: content?.content }
  return newResponse
}
