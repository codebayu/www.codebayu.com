import { HiCode } from 'react-icons/hi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/common/constant/careers';
import { SKILLS } from '@/common/constant/skills';

import CareerCard from './CareerCard';
import SkillCard from './SkillCard';

export default function SkillList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-wrap gap-6">
        {SKILLS?.map((skill, index) => <SkillCard key={index} skill={skill} />)}
      </div>
    </section>
  );
}
