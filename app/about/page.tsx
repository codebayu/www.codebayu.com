import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import About from '@/modules/about';

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`
  }
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
