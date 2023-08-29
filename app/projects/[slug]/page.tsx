import BackButton from '@/app/common/components/elements/BackButton';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';
import { METADATA } from '@/app/common/constant/metadata';
import { prisma } from '@/app/common/libs/prisma';
import { IProjectItem } from '@/app/common/types/projects';
import ProjectDetail from '@/app/modules/projects/components/ProjectDetail';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

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
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectsDetailPageProps) {
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
    where: { slug },
  });
  if (!response) return {} as IProjectItem;
  return response;
}
