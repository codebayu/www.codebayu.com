import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Introduction from './Introduction';
import SkillList from './SkillList';

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <CareerList />
      <Breakline className="mt-8 mb-6" />
      <SkillList />
    </>
  );
}
