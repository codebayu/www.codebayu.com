import Image from 'next/image';
import Link from 'next/link';

import Breakline from '@/common/components/elements/Breakline';
import CommentList from '@/common/components/elements/CommentList';
import MDXComponent from '@/common/components/elements/MDXComponent';
import { PLACEHOLDER_URL } from '@/common/constant';
import { BlogDetailProps, CommentItemProps } from '@/common/types/blog';

import ReaderHeader from './ReaderHeader';

interface ReaderProps {
  content: BlogDetailProps;
  comments: CommentItemProps[];
  pageViewCount: number;
}

export default function ReaderPage({ content, comments, pageViewCount }: ReaderProps) {
  const { cover_image, title, body_markdown, comments_count, published_at, tags, reading_time_minutes, id, url } =
    content;
  return (
    <>
      <ReaderHeader
        title={title}
        comments_count={comments_count}
        reading_time_minutes={reading_time_minutes}
        published_at={published_at}
        page_views_count={pageViewCount}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <div className="overflow-hidden">
          <Image
            src={cover_image || PLACEHOLDER_URL}
            width={800}
            height={500}
            alt={title}
            className="hover:scale-105 transition-all duration-700"
            priority
          />
        </div>
        {body_markdown && <MDXComponent>{body_markdown}</MDXComponent>}
      </div>
      {tags?.length >= 1 && (
        <div className="my-10 space-y-2">
          <h3 className="text-lg font-medium">Tags:</h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags?.map((stack: string, index: number) => (
              <span
                key={index}
                className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded-full px-4 py-1 text-[14px] font-medium"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}
      <Breakline className="!my-10" />
      <div className="flex flex-col mb-4 space-y-2">
        <h3 className="text-lg font-medium">Comment on DEV Community:</h3>
        <Link href={url} target="_blank" className="text-blue-600">
          {url}
        </Link>
      </div>
      <CommentList id={id} totalComments={comments_count} comments={comments} />
    </>
  );
}
