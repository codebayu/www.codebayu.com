import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import VideoPlayer from '../VideoPlayer'

describe('VideoPlayer Component', () => {
  it('Should render video player component', () => {
    render(<VideoPlayer url="/test" />)
    expect(screen.getByTestId('video-player')).toBeTruthy()
  })
})
