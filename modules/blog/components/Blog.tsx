'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import EmptyState from '@/common/components/elements/EmptyState';
import { BlogItem } from '@/common/types/blog';

import { useBlogViewStore } from '@/context/useBlogViewStore';

import useIsMobile from '@/hooks/useIsMobile';

import BlogCard from './BlogCard';
import BlogListHeader from './BlogListHeader';

interface BlogProps {
  blogs: BlogItem[];
}

export default function Blog({ blogs }: BlogProps) {
  const isMobile = useIsMobile();
  const { viewOption, setViewOption } = useBlogViewStore();

  if (blogs.length === 0) return <EmptyState message="No Data" />;

  return (
    <>
      {!isMobile && <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />}
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
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
