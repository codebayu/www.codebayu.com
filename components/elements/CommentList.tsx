import EmptyState from '@/components/elements/EmptyState'

import { CommentItemProps } from '@/common/types/blog'

import CommentItem from './CommentItem'

interface CommentListProps {
  id: number
  totalComments: number
  comments: CommentItemProps[]
}

export default function CommentList({ totalComments, comments }: CommentListProps) {
  return (
    <section id="comments" className="space-y-5 pb-6 pt-4">
      {totalComments >= 1 ? (
        <>
          <div data-testid="comment-count" className="pb-5 text-xl font-semibold">
            {totalComments} Comment{totalComments > 1 && 's'}
          </div>
          {comments?.map(comment => <CommentItem key={comment?.id_code} {...comment} />)}
        </>
      ) : (
        <EmptyState message="No Comment." />
      )}
    </section>
  )
}
