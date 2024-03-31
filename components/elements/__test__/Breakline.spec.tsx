import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Breakline from '../Breakline'

describe('Breakline Component', () => {
  const props = {
    className: 'mt-2'
  }

  it('Should render breakline element', () => {
    render(<Breakline className={props.className} />)
    const breakline = screen.getByTestId('breakline')
    expect(breakline).toBeTruthy()
    expect(breakline.className).toBe(`my-4 border-t border-gray-300 dark:border-neutral-700 ${props.className}`)
  })

  it('Should render breakline element without props', () => {
    const item = render(<Breakline />)
    const breakline = item.getAllByTestId('breakline')[1]
    expect(breakline).toBeTruthy()
    expect(breakline.className).toBe('my-4 border-t border-gray-300 dark:border-neutral-700 ')
  })
})
