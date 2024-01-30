import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'

import GoHome from '../GoHome'

describe('GoHome Component', () => {
  beforeAll(() => {
    render(<GoHome />)
  })

  it('Should render container', () => {
    const container = screen.getByTestId('go-home')
    expect(container).toBeTruthy()
    expect(container.hasAttribute('data-aos')).toBe(true)
    expect(container.className).toBe(
      'mt-8 flex w-full flex-col justify-center space-y-3 px-6 md:flex-row md:space-x-3 md:space-y-0'
    )
  })

  it('Should render Website & Portfolio text', () => {
    expect(screen.getByText('Website & Portfolio')).toBeTruthy()
  })

  it('Should render icon on button component', () => {
    expect(screen.getAllByTestId('go-home-icon')).toBeTruthy()
  })
})
