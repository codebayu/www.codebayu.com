import { HiCode } from 'react-icons/hi'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { STACKS } from '@/common/constant/stacks'
import clsxm from '@/common/libs/clsxm'

import SkillCard from './SkillCard'

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5)
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5)
          return (
            <div
              key={index}
              className={clsxm('flex animate-slide-infinite py-3 space-x-4', index === 1 && 'animation-reverse')}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
