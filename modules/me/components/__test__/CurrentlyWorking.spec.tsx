/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { careersMock } from '@/common/mocks/careers'

import CurrentlyWorking from '../CurrentlyWorking'

vi.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} alt="CodeBayu" />
}))

describe('CurrentlyWorking Component', () => {
  beforeAll(() => {
    render(<CurrentlyWorking careers={careersMock} />)
  })

  it('Should render container', () => {
    const container = screen.getByTestId('currently-working')
    expect(container).toBeTruthy()
    expect(container.hasAttribute('data-aos')).toBe(true)
    expect(container.className).toBe(
      'my-8 flex w-full flex-col items-center justify-center space-y-3 px-6 md:space-x-3'
    )
  })

  it('Should render Currently Working On text', () => {
    const text = screen.getByTestId(`currently-working`)
    expect(text).toBeTruthy()
  })
  it('Should render Currently Working On Link', () => {
    const link = screen.getByTestId(`currently-working-link`)
    expect(link).toBeTruthy()
    expect(link.className).toBe('font-bold')
  })
})
