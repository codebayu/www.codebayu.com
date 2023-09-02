'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { ContentProps } from '@/common/types/learn';
import { MdxFileProps } from '@/common/types/mdx';

import LearnSubContentItem from './LearnSubContentItem';

interface ContentListsProps {
  sortedSubContents: MdxFileProps[];
  title: string;
  content: ContentProps;
}
export default function ContentLists({ sortedSubContents, title, content }: ContentListsProps) {
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
            parent={title}
            contentSlug={content?.slug}
            subContentSlug={item?.slug}
            title={item?.frontMatter?.title as string}
            language={item?.frontMatter?.language as string}
            difficulty={item?.frontMatter?.difficulty as string}
          />
        </motion.div>
      ))}
    </div>
  );
}
