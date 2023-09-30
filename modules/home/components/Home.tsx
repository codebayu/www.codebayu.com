import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Introduction from './Introduction';
import LatestArticle from './LatestArticle';
import SkillList from './SkillList';

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <LatestArticle />
      <Breakline className="my-6" />
      <CareerList />
      <Breakline className="my-6" />
      <SkillList />
    </>
  );
}
