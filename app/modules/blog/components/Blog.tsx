'use client';

import EmptyState from '@/app/common/components/elements/EmptyState';
import { BlogItem, BlogProps } from '@/app/common/types/blog';
import BlogListHeader from './BlogListHeader';
import { useWindowSize } from 'usehooks-ts';
import { useBlogViewStore } from '@/app/context/useBlogViewStore';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import BlogCard from './BlogCard';

export default function Blog({ blogs }: BlogProps) {
  const { width } = useWindowSize();
  const isMobile = width < 468;
  const { viewOption, setViewOption } = useBlogViewStore();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (blogs?.length === 0) {
    return <EmptyState message="No Data" />;
  }

  return (
    <>
      {!isMobile && (
        <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />
      )}
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile
            ? 'flex flex-col'
            : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {blogs?.map((item: BlogItem, index: number) => (
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
