import { Metadata, ResolvingMetadata } from 'next';

import React from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';
import loadMdxFiles from '@/common/libs/mdx';
import { prisma } from '@/common/libs/prisma';
import { IProjectItem } from '@/common/types/projects';

import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: ProjectsDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProjectDetail(params.slug);
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
  };
}

export default async function ProjectDetailPage({ params }: ProjectsDetailPageProps) {
  const detail = await getProjectDetail(params.slug);
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/projects" />
        <PageHeading title={detail.title} description={detail.description} />
        <ProjectDetail {...detail} />
      </Container>
    </>
  );
}

async function getProjectDetail(slug: string): Promise<IProjectItem> {
  const response = await prisma.projects.findUnique({
    where: { slug }
  });
  const contents = loadMdxFiles(slug, true);
  if (!response) return {} as IProjectItem;
  const content = contents.find(item => item.slug === slug);
  const newResponse = { ...response, content: content?.content };
  return newResponse;
}
