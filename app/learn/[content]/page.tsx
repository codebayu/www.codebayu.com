import { Metadata, ResolvingMetadata } from 'next';

import { compareDesc, parseISO } from 'date-fns';
import React from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import { METADATA } from '@/common/constant/metadata';
import loadMdxFiles from '@/common/libs/mdx';

import ContentLists from '@/modules/learn/components/ContentLists';

interface LearnContentPage {
  params: { content: string };
}

type Props = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { content } = await getContent(params.content);
  return {
    title: `${content?.title} ${METADATA.exTitle}`,
    description: `${content?.description} on ${METADATA.openGraph.siteName}`,
    openGraph: {
      images: content?.image,
      url: METADATA.openGraph.url,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator
    },
    keywords: content?.title,
    alternates: {
      canonical: `${METADATA.openGraph.url}/learn/${params.content}`
    }
  };
}

export default async function LearnContentPage({ params }: LearnContentPage) {
  const { content, subContents } = await getContent(params.content);
  if (!content) return null;

  const sortedSubContents = subContents.sort((a, b) => {
    const dateA = parseISO(a.frontMatter.created_at as string);
    const dateB = parseISO(b.frontMatter.created_at as string);
    return compareDesc(dateA, dateB);
  });

  const { title, description } = content;

  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/learn" />
        <PageHeading title={title} description={description} />
        <ContentLists title={title} content={content} sortedSubContents={sortedSubContents} />
      </Container>
    </>
  );
}

async function getContent(contentSlug: string) {
  const content = LEARN_CONTENTS.find(item => item?.slug === contentSlug) || null;

  if (!content) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  const subContentList = loadMdxFiles(content?.slug);
  return {
    content,
    subContents: subContentList
  };
}
