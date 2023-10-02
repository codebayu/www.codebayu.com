import React from 'react';

export default function LoadingLatestArticle() {
  return (
    <div className="min-w-[250px] h-max flex flex-col space-y-2">
      <div className="w-full h-28 overflow-hidden rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700"></div>
      <div className="h-4 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
      <div className="h-2 w-24 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
    </div>
  );
}
