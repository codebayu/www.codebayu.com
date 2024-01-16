/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { formatDate } from '@/common/helpers'
import { commentsMock } from '@/common/mocks/blog'

import CommentItem from '../CommentItem'

vi.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} alt="Bayu Setiawan" />
}))

describe('CommentItem Component', () => {
  beforeEach(() => {
    render(<CommentItem {...commentsMock[0]} />)
  })

  it('Should render coment item', () => {
    const container = screen.getByTestId('comment-item')
    expect(container).toBeTruthy()
    expect(container.className).toBe('flex gap-5 break-all dark:text-neutral-400')
  })

  it('Should render user image', () => {
    const image = screen.getAllByTestId('user-comment-image')[0]
    expect(image).toBeTruthy()
    expect(image.className).toContain('border border-neutral-200 dark:border-neutral-800')
    expect(image).toHaveProperty('src', commentsMock[0].user?.profile_image_90)
    expect(image).toHaveProperty('alt', commentsMock[0].user?.name)
  })

  it('Should render username', () => {
    const username = screen.getAllByText(commentsMock[0].user?.name)[0]
    expect(username).toBeTruthy()
    expect(username.className).toBe('font-medium dark:text-neutral-300')
  })

  it('Should render dot', () => {
    const dot = screen.getAllByText('•')[0]
    expect(dot).toBeTruthy()
    expect(dot.className).toBe('hidden dark:text-neutral-700 sm:block')
  })

  it('Should render comment date', () => {
    const commentDate = screen.getAllByText(formatDate(commentsMock[0].created_at, 'MMM dd, yyyy, HH:mm'))[0]
    expect(commentDate).toBeTruthy()
    expect(commentDate.className).toBe('text-xs dark:text-neutral-500')
  })

  it('Should render comment body', () => {
    const commentBody = screen.getAllByTestId('comment-body')[0]
    expect(commentBody).toBeTruthy()
    expect(commentBody.className).toBe('max-w-[600px] leading-[1.8]')
  })
})
