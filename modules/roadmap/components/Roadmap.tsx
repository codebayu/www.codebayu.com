import { IAdsBanner } from '@/common/types/ads'
import { IRoadmap } from '@/common/types/roadmap'

import BadgeList from './BadgeList'
import CourseList from './CourseList'

export default function Roadmap({ roadmaps, promotion }: { roadmaps: IRoadmap; promotion?: IAdsBanner }) {
  return (
    <>
      <BadgeList promotion={promotion} />
      <CourseList roadmaps={roadmaps} />
    </>
  )
}
