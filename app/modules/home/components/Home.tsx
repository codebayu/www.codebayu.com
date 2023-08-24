import Breakline from '@/app/common/components/elements/Breakline';
import Introduction from './Introduction';
import CareerList from './CareerList';

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <CareerList />
    </>
  );
}
