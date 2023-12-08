import React from 'react'

import { IRoadmap } from '@/common/types/roadmap'

import BadgeList from './BadgeList'
import CourseList from './CourseList'

export default function Roadmap({ roadmaps }: { roadmaps: IRoadmap }) {
  return (
    <>
      <BadgeList />
      <CourseList roadmaps={roadmaps} />
    </>
  )
}
