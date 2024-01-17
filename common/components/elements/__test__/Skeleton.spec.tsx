import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Skeleton from '../Skeleton'

describe('Skeleton Component', () => {
  const props = {
    className: 'w-4 h-4 rounded-sm'
  }

  it('Should render skeleton element', () => {
    render(<Skeleton className={props.className} />)
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toBeTruthy()
    expect(skeleton.className).toBe(`animate-pulse bg-neutral-300 dark:bg-neutral-700 ${props.className}`)
  })

  it('Should render skeleton element without props', () => {
    const item = render(<Skeleton />)
    const skeleton = item.getAllByTestId('skeleton')[1]
    expect(skeleton).toBeTruthy()
    expect(skeleton.className).toBe('animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded-md w-full h-full')
  })
})
