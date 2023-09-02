/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CourseCard from './CourseCard';
import { CourseCardProps } from '@/common/types/roadmap';
import { ROADMAP } from '@/common/constant/roadmap';

export default function CourseList() {
  const params = useSearchParams();
  const tribe = params.get('tribe');
  const [renderCourse, setRenderCourse] = useState<CourseCardProps[]>([]);
  const { frontend, backend } = ROADMAP;

  useEffect(() => {
    let selectTribe: CourseCardProps[] = [];
    if (tribe === 'frontend-developer') {
      selectTribe = frontend;
    } else if (tribe === 'backend-developer') {
      selectTribe = backend;
    }
    setRenderCourse(selectTribe);
  }, [tribe]);

  return (
    <div className="mt-6 flex flex-col space-y-2">
      {renderCourse.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}
