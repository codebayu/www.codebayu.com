import { Metadata } from 'next';
import Blog from '@/app/modules/blog';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';

export const metadata: Metadata = {
  title: 'Blog - Bayu Setiawan',
  description: 'Awesome portfolio',
};

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION =
  'Exploring the world of code, creativity, and constant learning.';

export default function BlogPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blog />
      </Container>
    </>
  );
}
