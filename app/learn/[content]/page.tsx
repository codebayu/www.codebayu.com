import BackButton from '@/app/common/components/elements/BackButton';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/app/common/constant/learn';
import loadMdxFiles from '@/app/common/libs/mdx';
import ContentLists from '@/app/modules/learn/components/ContentLists';
import { compareDesc, parseISO } from 'date-fns';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

interface LearnContentPage {
  params: { content: string };
}

type Props = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { content } = await getContent(params.content);
  return {
    title: `${content?.title} | Code Bayu`,
    description: `${content?.description} on codebayu`,
    openGraph: {
      images: content?.image,
      url: process.env.DOMAIN,
      siteName: 'Code Bayu',
      locale: 'id-ID',
      type: 'article',
      authors: 'Bayu Setiawan',
    },
    keywords: content?.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}`,
    },
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
        <ContentLists
          title={title}
          content={content}
          sortedSubContents={sortedSubContents}
        />
      </Container>
    </>
  );
}

async function getContent(contentSlug: string) {
  const content =
    LEARN_CONTENTS.find((item) => item?.slug === contentSlug) || null;

  if (!content) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  const subContentList = loadMdxFiles(content?.slug);
  return {
    content,
    subContents: subContentList,
  };
}
