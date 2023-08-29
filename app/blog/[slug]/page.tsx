import BackButton from '@/app/common/components/elements/BackButton';
import Container from '@/app/common/components/elements/Container';
import { BlogDetailProps, CommentItemProps } from '@/app/common/types/blog';
import BlogDetail from '@/app/modules/blog/components/BlogDetail';
import { getBlogViews } from '@/services/view';
import axios from 'axios';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getBlogDetail({ params, searchParams });
  return {
    title: `${blog.title} | Code Bayu`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: 'Code Bayu',
      locale: 'id-ID',
      type: 'article',
      authors: blog.user.name,
    },
    keywords: blog.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${blog.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const blog = await getBlogDetail({ params, searchParams });
  const pageViewCount = await getBlogViews(searchParams.id as string);
  const comments = await getComments(searchParams.id as string);
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/blog" />
        <BlogDetail
          blog={blog}
          pageViewCount={pageViewCount}
          comments={comments}
        />
      </Container>
    </>
  );
}

async function getBlogDetail({
  params,
  searchParams,
}: Props): Promise<BlogDetailProps> {
  const URL = `https://dev.to/api/articles/${searchParams.id}`;
  const response = await axios.get(URL, {
    headers: {
      'api-key': process.env.DEVTO_KEY,
    },
  });
  if (response.status !== 200) return {} as BlogDetailProps;
  return response.data;
}

async function getComments(postId: string): Promise<CommentItemProps[]> {
  const DEV_TO_URL = `https://dev.to/api/comments/?a_id=${postId}`;
  const response = await axios.get(DEV_TO_URL, {
    headers: {
      'api-key': process.env.DEVTO_KEY,
    },
  });
  if (response?.status !== 200) return [];
  return response.data;
}
