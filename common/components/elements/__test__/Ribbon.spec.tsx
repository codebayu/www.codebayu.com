import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'

import Ribbon from '../Ribbon'

describe('Ribbon Component', () => {
  beforeAll(() => {
    render(<Ribbon text="test" />)
  })

  it('Should render ribbon component', () => {
    const ribbon = screen.getByTestId('ribbon')
    expect(ribbon).toBeTruthy()
    expect(ribbon.className).toBe('before:bg-amber-500 after:bg-amber-500')
  })

  it('Should render the right text', () => {
    const ribbonText = screen.getByTestId('ribbon-text')
    expect(ribbonText).toBeTruthy()
    expect(ribbonText.textContent).toBe('test')
    expect(ribbonText.className).toBe('-ml-4 font-roboto-condensed')
  })
})
