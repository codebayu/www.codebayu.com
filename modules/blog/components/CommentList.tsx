import React from 'react';

import EmptyState from '@/common/components/elements/EmptyState';
import { CommentItemProps } from '@/common/types/blog';

import CommentItem from './CommentItem';

interface CommentListProps {
  id: number;
  totalComments: number;
  comments: CommentItemProps[];
}

export default function CommentList({ totalComments, comments }: CommentListProps) {
  return (
    <section className="space-y-5 pt-4 pb-6">
      {totalComments >= 1 ? (
        <>
          <div className="font-semibold text-xl pb-5">
            {totalComments} Comment{totalComments > 1 && 's'}
          </div>
          {comments?.map(comment => <CommentItem key={comment?.id_code} {...comment} />)}
        </>
      ) : (
        <EmptyState message="No Comment." />
      )}
    </section>
  );
}
