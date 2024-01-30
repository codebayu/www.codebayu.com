/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { PROFILE_URL } from '@/common/constant'

import MeProfile from '../MeProfile'

vi.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} alt="profile" />
}))

describe('MeProfile Component', () => {
  beforeAll(() => {
    render(<MeProfile />)
  })

  it('Should render container', () => {
    const container = screen.getByTestId('me-profile')
    expect(container).toBeTruthy()
    expect(container.hasAttribute('data-aos')).toBe(true)
    expect(container.className).toBe('mt-6 flex flex-col items-center space-y-2 px-6')
  })

  it('Should render the profile image component', () => {
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img).toHaveProperty('src', PROFILE_URL)
    expect(img).toHaveProperty('alt', 'profile')
    expect(img).toHaveProperty('width', 80)
    expect(img).toHaveProperty('height', 80)
  })

  it('Should render author name text', () => {
    const text = screen.getByText('Bayu Setiawan')
    expect(text).toBeTruthy()
    expect(text.className).toBe('font-sora flex-grow text-lg font-medium lg:text-xl')
  })

  it('Should render tagline text', () => {
    const text = screen.getByText('Software Engineer who focus on frontend development.')
    expect(text).toBeTruthy()
    expect(text.className).toBe(
      'text-center text-sm leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'
    )
  })

  it('Should render verified icon', () => {
    expect(screen.getByTestId('verified-icon')).toBeTruthy()
  })
})
