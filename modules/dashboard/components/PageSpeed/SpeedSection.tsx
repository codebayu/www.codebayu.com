import React from 'react';

import CircleProgress from '@/common/components/elements/CircleProgress';
import LoadingSpeedInsight from '@/common/components/elements/LoadingSpeedInsight';

interface SpeedSectionProps {
  data: any;
  isLoading: boolean;
}

export default function SpeedSection({ data, isLoading }: SpeedSectionProps) {
  const categories = data?.lighthouseResult?.categories || [];

  const performance = Number(categories?.performance?.score) || 0;
  const accessibility = Number(categories?.accessibility?.score) || 0;
  const seo = Number(categories?.seo?.score) || 0;
  const bestPractice = Number(categories?.['best-practices']?.score) || 0;

  if (isLoading) return <LoadingSpeedInsight />;

  return (
    <div className="my-6 flex text-neutral-600 dark:text-neutral-300 text-[10px] md:text-sm justify-center items-end space-x-6 md:space-x-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h3>Performance</h3>
        <CircleProgress value={performance * 100} />
      </div>
      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h3>Best Practice</h3>
        <CircleProgress value={bestPractice * 100} />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h3>Accessbility</h3>
        <CircleProgress value={accessibility * 100} />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h3>SEO</h3>
        <CircleProgress value={seo * 100} />
      </div>
    </div>
  );
}
