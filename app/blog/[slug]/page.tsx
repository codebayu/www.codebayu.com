import BackButton from '@/app/common/components/elements/BackButton';
import Container from '@/app/common/components/elements/Container';
import { BlogDetailProps, BlogItem } from '@/app/common/types/blog';
import BlogDetail from '@/app/modules/blog/components/BlogDetail';
import axios from 'axios';
import React from 'react';

type Props = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const blog = await getBlogDetail({ params, searchParams });
  const pageViewCount = await getBlogViews(searchParams.id as string);
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/blog" />
        <BlogDetail blog={blog} pageViewCount={pageViewCount} />
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

async function getBlogViews(searchParams: string) {
  const URL = `https://dev.to/api/articles/me/all`;
  const response = await axios.get(URL, {
    headers: {
      'api-key': process.env.DEVTO_KEY,
    },
  });
  if (response.status !== 200) return 0;
  const data = response.data;

  const findArticle = data?.find(
    (blog: BlogItem) => blog.id === parseInt(searchParams)
  );
  const page_views_count: number = findArticle?.page_views_count;
  return page_views_count;
}
