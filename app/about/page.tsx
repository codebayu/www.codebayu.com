import { Metadata } from 'next';
import About from '@/app/modules/about';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';

export const metadata: Metadata = {
  title: 'About | Code Bayu',
  description: 'A short story of Bayu Setiawan',
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = 'A short story of me';

export default function AboutPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
}
