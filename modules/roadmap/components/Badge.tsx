'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import React from 'react';

import clsxm from '@/common/libs/clsxm';
import { BadgeProps } from '@/common/types/roadmap';

export default function Badge({ label, path, isShow }: BadgeProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;
  return (
    <Link
      href={path}
      className={clsxm(
        'px-3 py-2 text-xs rounded-full whitespace-nowrap',
        isShow ? 'flex' : 'hidden',
        path === url ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-neutral-100 dark:bg-neutral-800'
      )}
    >
      {label}
    </Link>
  );
}
