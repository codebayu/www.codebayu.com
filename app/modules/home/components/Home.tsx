import Breakline from '@/app/common/components/elements/Breakline';
import Introduction from './Introduction';
import Contributions from './Contributions';

interface HomeProps {
  githubData: any;
}
export default function Home({ githubData }: HomeProps) {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <Contributions githubData={githubData} />
    </>
  );
}
