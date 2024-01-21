/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { getCloudinaryUrl } from '@/common/libs/cloudinary'
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
    const text = screen.getByText('Currently Working On')
    expect(text).toBeTruthy()
    expect(text.className).toBe('font-sora text-center text-sm text-neutral-600 dark:text-neutral-500')
  })

  it('Should render the company image component', () => {
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img).toHaveProperty('src', getCloudinaryUrl(careersMock[0].logo))
    expect(img).toHaveProperty('alt', careersMock[0].company)
    expect(img).toHaveProperty('width', 30)
    expect(img).toHaveProperty('height', 30)
  })

  it('Should render company name text', () => {
    const text = screen.getByText(careersMock[0].company)
    expect(text).toBeTruthy()
    expect(text.className).toBe('text-md font-sora font-medium text-neutral-800 dark:text-neutral-500')
  })
})
