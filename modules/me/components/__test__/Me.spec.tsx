import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { careersMock } from '@/common/mocks/careers'

import MeSection from '../Me'

describe('MeSection Component', () => {
  it('Should render MeSection component', () => {
    render(<MeSection careers={careersMock} />)
    expect(screen.getByTestId('go-home')).toBeTruthy()
    expect(screen.getByTestId('currently-working')).toBeTruthy()
    expect(screen.getByTestId('me-profile')).toBeTruthy()
  })
})
