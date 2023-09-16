'use client';

import { useSearchParams } from 'next/navigation';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = '', ...others }: ContainerProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams.get('read-mode');
  return (
    <div className={`mb-10 ${readMode !== 'true' && 'mt-20'} lg:mt-0 p-8 ${className} `} {...others}>
      {children}
    </div>
  );
}
