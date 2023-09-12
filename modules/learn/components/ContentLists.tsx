'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { BlogItem } from '@/common/types/blog';
import { ContentProps } from '@/common/types/learn';

import LearnSubContentItem from './LearnSubContentItem';

interface ContentListsProps {
  sortedSubContents: BlogItem[];
  content: ContentProps;
}
export default function ContentLists({ sortedSubContents, content }: ContentListsProps) {
  return (
    <div className="flex flex-col gap-3">
      {sortedSubContents?.map((item, index) => (
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
