import { Metadata } from 'next';
import Container from '@/app/common/components/elements/Container';
import Home from '@/app/modules/home';

export const metadata: Metadata = {
  title: 'Bayu Setiawan - Personal Portfolio',
  description: 'Awesome portfolio',
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
