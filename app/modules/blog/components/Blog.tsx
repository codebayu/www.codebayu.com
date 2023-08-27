'use client';

import EmptyState from '@/app/common/components/elements/EmptyState';
import { BlogItem, BlogProps } from '@/app/common/types/blog';
import BlogListHeader from './BlogListHeader';
import { useWindowSize } from 'usehooks-ts';
import { useBlogViewStore } from '@/app/context/useBlogViewStore';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingCard from '@/app/common/components/elements/LoadingCard';

export default function Blog() {
  const { width } = useWindowSize();
  const isMobile = width < 468;
  const { viewOption, setViewOption } = useBlogViewStore();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getBlogData() {
    const response = await axios.get('/api/blog', {
      headers: {
        'Cache-Control': 'max-age=1',
      },
    });
    setBlogs(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getBlogData();
  }, []);

  if (isLoading)
    return (
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile
            ? 'flex flex-col'
            : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {[1, 2].map((item) => (
          <LoadingCard key={item} view={viewOption} />
        ))}
      </div>
    );

  if (blogs?.length === 0 && !isLoading) {
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
