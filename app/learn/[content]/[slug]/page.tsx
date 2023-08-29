import BackButton from '@/app/common/components/elements/BackButton';
import Breakline from '@/app/common/components/elements/Breakline';
import Container from '@/app/common/components/elements/Container';
import loadMdxFiles from '@/app/common/libs/mdx';
import ContentDetail from '@/app/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/app/modules/learn/components/ContentDetailHeader';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

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
    title: `${meta?.title} | Code Bayu`,
    openGraph: {
      url: process.env.DOMAIN,
      siteName: 'Code Bayu',
      locale: 'id-ID',
      type: 'article',
      authors: 'Bayu Setiawan',
    },
    category: meta.category,
    keywords: meta.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}/${params.slug}`,
    },
  };
}

export default async function LearnContentDetailPage({
  params,
}: LearnContentDetailPageProps) {
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
  const contentData = contentList.find((item) => item.slug === params.slug);
  if (!contentData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  return contentData;
}
