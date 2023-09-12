'use client';

import { fetcher } from '@/services/fetcher';
import { motion } from 'framer-motion';
import React from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import { DEVTO_BLOG_API } from '@/common/constant';
import { BlogItem } from '@/common/types/blog';
import { ContentProps } from '@/common/types/learn';

import LearnSubContentItem from './LearnSubContentItem';

interface ContentListsProps {
  content: ContentProps;
}
export default function ContentLists({ content }: ContentListsProps) {
  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher);
  const learns: BlogItem[] = data?.filter((blog: BlogItem) => blog.collection_id === content.id);

  if (learns?.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />;
  }

  return (
    <div className="flex flex-col gap-3">
      {learns?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnSubContentItem
            parent={content.title}
            contentSlug={content?.slug}
            subContentSlug={item?.slug}
            title={item.title}
            language={content.language}
            difficulty={content.level}
            postId={`${item.id}`}
          />
        </motion.div>
      ))}
    </div>
  );
}
