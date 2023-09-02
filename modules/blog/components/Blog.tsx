'use client';

import { fetcher } from '@/services/fetcher';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import LoadingCard from '@/common/components/elements/LoadingCard';
import { BlogItem } from '@/common/types/blog';

import { useBlogViewStore } from '@/context/useBlogViewStore';

import useIsMobile from '@/hooks/useIsMobile';

import BlogCard from './BlogCard';
import BlogListHeader from './BlogListHeader';

export default function Blog() {
  const isMobile = useIsMobile();
  const { viewOption, setViewOption } = useBlogViewStore();
  const { data, isLoading } = useSWR('/api/blog', fetcher);

  const blogData: BlogItem[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data]);

  if (isLoading)
    return (
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {[1, 2].map(item => (
          <LoadingCard key={item} view={viewOption} />
        ))}
      </div>
    );

  if (blogData.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />;
  }

  return (
    <>
      {!isMobile && <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />}
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {blogData?.map((item: BlogItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogCard view={viewOption} {...item} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
