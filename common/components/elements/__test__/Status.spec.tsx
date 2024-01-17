import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Status from '../Status'

describe('Status Component', () => {
  beforeEach(() => {
    render(<Status />)
  })

  it('Should render status container element', () => {
    const element = screen.getByTestId('available-hire-container')
    expect(element).toBeTruthy()
    expect(element.className).toBe(
      'absolute inverted-border-radius-dark left-0 z-10 rounded-br-xl bg-white py-2 pr-2 dark:bg-dark'
    )
  })

  it('Should render status container element light', async () => {
    const element = screen.getAllByTestId('available-hire-container')[0]
    waitFor(() => {
      expect(element).toBeTruthy()
      expect(element.className).toBe(
        'absolute inverted-border-radius-dark left-0 z-10 rounded-br-xl bg-white py-2 pr-2 dark:bg-dark'
      )
    })
  })

  it('Should render available element', () => {
    const element = screen.getAllByTestId('available-hire')[0]
    expect(element).toBeTruthy()
    expect(element.className).toBe(
      'relative flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-2 py-1 dark:border-neutral-700 dark:bg-dark'
    )
  })

  it('Should render available element', () => {
    const dots = screen.getAllByTestId('dots')[0]
    expect(dots).toBeTruthy()
    expect(dots.className).toBe('h-2 w-2 rounded-full bg-green-400')
  })

  it('Should render Hire Me text', () => {
    const hire = screen.getAllByText('Hire me.')[0]
    expect(hire).toBeTruthy()
    expect(hire.className).toBe('text-xs text-neutral-600 dark:text-neutral-400')
  })

  it('Should not render available element when not mounted', async () => {
    const element = screen.getAllByTestId('available-hire')
    waitFor(() => {
      expect(element).toBeFalsy()
    })
  })

  it('Should not render dot element when not mounted', async () => {
    const dots = screen.getAllByTestId('dots')[0]
    waitFor(() => {
      expect(dots).toBeFalsy()
    })
  })

  it('Should not render Hire Me text when not mounted', async () => {
    const hire = screen.getAllByText('Hire me.')[0]
    waitFor(() => {
      expect(hire).toBeFalsy()
    })
  })
})
