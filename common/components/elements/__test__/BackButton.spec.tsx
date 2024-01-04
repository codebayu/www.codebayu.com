import { render, screen } from '@testing-library/react'
import { useRouter } from 'next-router-mock'
import { describe, expect, it, vi } from 'vitest'

import BackButton from '../BackButton'

vi.mock('next/navigation', () => ({
  useRouter
}))

describe('Back Button Component', () => {
  it('Should render back button when not passing props', () => {
    render(<BackButton />)
    const button = screen.getByTestId('back-button')
    expect(button).toBeTruthy()
    expect(button.className).toBe(
      'flex gap-2 w-max hover:gap-3 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer'
    )
  })

  it('Should render back button when passing props', () => {
    render(<BackButton url="/test" />)
    expect(screen.getByTestId('back-button-url')).toBeTruthy()
  })
})
