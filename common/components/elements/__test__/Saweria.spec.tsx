import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Saweria from '../Saweria'

describe('Saweria Component', () => {
  it('Should render Saweria with text component', () => {
    render(<Saweria withText />)
    const container = screen.getByTestId('saweria-button-with-text')
    expect(container).toBeTruthy()
    expect(container.className).toBe(
      'flex h-max w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white shadow-sm transition-all delay-75 duration-300 hover:gap-3 hover:transition-all hover:duration-300 md:w-max'
    )
  })

  it('Should render Buy me a Coffee text', () => {
    const container = screen.getByText('Buy me a Coffee')
    expect(container).toBeTruthy()
  })

  it('Should render Saweria without text component', () => {
    render(<Saweria />)
    const container = screen.getByTestId('saweria-button-without-text')
    expect(container).toBeTruthy()
    expect(container.hasAttribute('aria-label')).toBe(true)
  })
})
