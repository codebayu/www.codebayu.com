import BackButton from '@/app/common/components/elements/BackButton';
import Breakline from '@/app/common/components/elements/Breakline';
import Container from '@/app/common/components/elements/Container';
import loadMdxFiles from '@/app/common/libs/mdx';
import ContentDetail from '@/app/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/app/modules/learn/components/ContentDetailHeader';
import React from 'react';

interface Params {
  content: string;
  slug: string;
}

interface LearnContentDetailPageProps {
  params: Params;
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
