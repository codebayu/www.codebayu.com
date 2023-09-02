import { Metadata, ResolvingMetadata } from 'next';

import React from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';
import loadMdxFiles from '@/common/libs/mdx';

import ContentDetail from '@/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/modules/learn/components/ContentDetailHeader';

interface Params {
  content: string;
  slug: string;
}

interface LearnContentDetailPageProps {
  params: Params;
}

export async function generateMetadata(
  { params }: LearnContentDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getContentDetail(params);
  const { frontMatter: meta } = data as any;
  return {
    title: `${meta?.title} ${METADATA.exTitle}`,
    openGraph: {
      url: METADATA.openGraph.url,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator
    },
    category: meta.category,
    keywords: meta.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}/${params.slug}`
    }
  };
}

export default async function LearnContentDetailPage({ params }: LearnContentDetailPageProps) {
  const data = await getContentDetail(params);
  const { content, frontMatter } = data as any;
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton />
        <ContentDetailHeader {...frontMatter} />
        {content && (
          <>
            <ContentDetail content={content} />
            <Breakline className="mt-14 mb-14" />
          </>
        )}
      </Container>
    </>
  );
}

async function getContentDetail(params: Params) {
  const contentList = await loadMdxFiles(params.content);
  const contentData = contentList.find(item => item.slug === params.slug);
  if (!contentData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  return contentData;
}
