import Container from '@/app/common/components/elements/Container';
import Home from '@/app/modules/home';

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  );
}
