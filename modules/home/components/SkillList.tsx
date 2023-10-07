import { HiCode } from 'react-icons/hi'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { SKILLS } from '@/common/constant/skills'

import SkillCard from './SkillCard'

export default function SkillList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-col overflow-x-hidden">
        <div className="flex animate-slide-infinite py-4 gap-5">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
