import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { commentsMock } from '@/common/mocks/blog'

import CommentList from '../CommentList'

describe('CommentList Component', () => {
  it('Should render count text when totalComments >= 1', () => {
    render(<CommentList id={1} totalComments={2} comments={commentsMock} />)
    const commentItems = screen.getByTestId('comment-item')
    const count = screen.getByTestId('comment-count')
    expect(commentItems).toBeTruthy()
    expect(count).toBeTruthy()
  })

  it('Should render comment item when totalComments === 0', () => {
    render(<CommentList id={2} totalComments={0} comments={[]} />)
    const emptyState = screen.getByTestId('empty-state')
    expect(emptyState).toBeTruthy()
  })
})
