import Container from '@/app/common/components/elements/Container';
import Home from '@/app/modules/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bayu Setiawan | Personal Website',
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  );
}
