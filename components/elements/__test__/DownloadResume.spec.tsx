import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import DownloadResume from '../DownloadResume'

describe('DownloadResume Component', () => {
  beforeEach(() => {
    render(<DownloadResume />)
  })

  it('Should render download resume component', () => {
    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
    expect(button.className).toBe(
      'flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300'
    )
  })

  it('Should render download icon', () => {
    expect(screen.getAllByTestId('download-icon')[0]).toBeTruthy()
  })

  it('Should render download icon container', () => {
    const container = screen.getAllByTestId('download-icon-container')[0]
    expect(container).toBeTruthy()
    expect(container.className).toBe('overflow-hidden border-b-2 border-neutral-600 dark:border-neutral-500')
  })
})
