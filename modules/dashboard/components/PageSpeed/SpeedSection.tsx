import React from 'react';

import CircleProgress from '@/common/components/elements/CircleProgress';
import LoadingSpeedInsight from '@/common/components/elements/LoadingSpeedInsight';

interface SpeedSectionProps {
  data: any;
  isLoading: boolean;
}

export default function SpeedSection({ data, isLoading }: SpeedSectionProps) {
  const categories = data?.lighthouseResult?.categories || {};
  const categoriesInArray = Object.keys(categories).map(key => ({ ...categories[key] }));

  if (isLoading) return <LoadingSpeedInsight />;

  return (
    <div className="my-6 flex text-neutral-600 dark:text-neutral-300 text-[10px] md:text-sm justify-center items-end space-x-6 md:space-x-10">
      {categoriesInArray.map(category => (
        <div key={category.id} className="flex flex-col text-center items-center justify-center space-y-2">
          <h3>{category.title}</h3>
          <CircleProgress value={Number(category.score || 0) * 100} />
        </div>
      ))}
    </div>
  );
}
