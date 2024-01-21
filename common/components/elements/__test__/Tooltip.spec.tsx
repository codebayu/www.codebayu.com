import { render, screen, within } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'

import Tooltip from '../Tooltip'

describe('Tooltip Component', () => {
  beforeAll(() => {
    render(
      <Tooltip title="Test title">
        <h1>Children</h1>
      </Tooltip>
    )
  })

  it('Should render Tooltip component', () => {
    expect(screen.getByTestId('tooltip-container')).toBeTruthy()
  })

  it('Should render children component', () => {
    const parent = screen.getByTestId('tooltip-container')
    expect(within(parent).getByTestId('children-container')).not.toBeNull()
  })
})
