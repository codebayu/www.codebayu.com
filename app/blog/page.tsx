import { Metadata } from 'next';

import axios from 'axios';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import Blog from '@/modules/blog';

import { BlogItem } from '../../common/types/blog';

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: 'My blogs content about programming and software development',
  keywords: 'blog code bayu, codebayu',
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`
  }
};

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = 'Exploring the world of code, creativity, and constant learning.';

export default async function BlogPage() {
  const blogs = await getBlogData();
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blog />
      </Container>
    </>
  );
}

async function getBlogData(): Promise<BlogItem[]> {
  const DEV_TO_URL = 'https://dev.to/api/articles/me/all';
  const response = await axios.get(DEV_TO_URL, {
    headers: {
      'api-key': process.env.DEVTO_KEY
    }
  });
  if (response?.status !== 200) return {} as BlogItem[];
  return response.data;
}
