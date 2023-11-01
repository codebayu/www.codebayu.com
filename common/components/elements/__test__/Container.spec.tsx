import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Container from '../Container'

describe('Container Component', () => {
  const props = {
    className: 'text-neutral-800',
    withMarginTop: true
  }

  beforeEach(() => {
    render(
      <Container className={props.className}>
        <h1>Children</h1>
      </Container>
    )
  })

  it('Should render container element', () => {
    const element = screen.getByTestId('container')
    expect(element).toBeTruthy()
    expect(element.className).toBe(`mb-10 mt-20 md:mt-6 lg:mt-0 p-8 ${props.className}`)
  })
})
