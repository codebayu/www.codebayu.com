import Link from 'next/link';

import React from 'react';

import Card from '@/common/components/elements/Card';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { CourseCardProps } from '@/common/types/roadmap';

import useIsMobile from '@/hooks/useIsMobile';

export default function CourseCard(props: CourseCardProps) {
  const { icon, title, linkEnglish, linkIndonesia } = props;
  const isMobile = useIsMobile();
  return (
    <Card className="flex justify-between p-4 border text-sm border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
      <div className="flex space-x-2">
        <div className="w-5">{STACKS[icon]}</div>
        <span>{title}</span>
      </div>
      <div className="flex space-x-2">
        {linkIndonesia && (
          <Tooltip title="Bahasa Indonesia">
            <Link
              href={linkIndonesia}
              target="_blank"
              className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-700"
            >
              {isMobile ? 'ID' : 'Indonesia'}
            </Link>
          </Tooltip>
        )}
        {linkEnglish && (
          <Tooltip title="Bahasa Inggris">
            <Link
              href={linkEnglish}
              target="_blank"
              className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-700"
            >
              {isMobile ? 'EN' : 'English'}
            </Link>
          </Tooltip>
        )}
      </div>
    </Card>
  );
}
