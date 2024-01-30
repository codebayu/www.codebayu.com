'use client'

import { useSearchParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'

import { tourRoadmap } from '@/common/constant/drivers'
import createDrivers from '@/common/libs/drivers'
import { CourseCardProps, IRoadmap } from '@/common/types/roadmap'

import useHasMounted from '@/hooks/useHasMounted'

import CourseCard from './CourseCard'

/* eslint-disable react-hooks/exhaustive-deps */

export default function CourseList({ roadmaps }: { roadmaps: IRoadmap }) {
  const params = useSearchParams()
  const mounted = useHasMounted()

  const { runDriver, isProductTour } = createDrivers({ steps: tourRoadmap, product: 'roadmap' })
  const tribe = params.get('tribe')
  const [renderCourse, setRenderCourse] = useState<CourseCardProps[]>([])
  const { frontend, mastering_react } = roadmaps

  useEffect(() => {
    let selectTribe: CourseCardProps[] = []
    if (tribe === 'frontend-developer') {
      selectTribe = frontend
    } else if (tribe === 'mastering-react-js') {
      selectTribe = mastering_react
    }
    setRenderCourse(selectTribe)
  }, [tribe])

  if (mounted && isProductTour) {
    runDriver()
  }

  return (
    <div className="mt-6 flex flex-col space-y-2">
      {renderCourse.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  )
}
