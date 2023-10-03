'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import React from 'react';

import Badge from '@/common/components/elements/Badge';
import { TRIBES } from '@/common/constant/roadmap';

export default function BadgeList() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;
  return (
    <div className="flex space-x-2 overflow-x-auto">
      {TRIBES.map(
        (tribe, index) =>
          tribe.isShow && (
            <Badge
              href={tribe.path}
              target="_self"
              variant={`/roadmap${tribe.path}` === url ? 'secondary' : 'primary'}
              size="large"
              key={index}
            >
              {tribe.label}
            </Badge>
          )
      )}
    </div>
  );
}
