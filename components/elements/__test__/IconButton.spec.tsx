import { render, screen } from '@testing-library/react'
import { BsThreeDots } from 'react-icons/bs'
import { beforeEach, describe, expect, it } from 'vitest'

import IconButton from '../IconButton'

describe('Icon Button Component', () => {
  const props = {
    icon: <BsThreeDots size={16} />,
    onClick: () => {}
  }

  beforeEach(() => {
    render(<IconButton icon={props.icon} onClick={props.onClick} />)
  })

  it('Should render icon button element', () => {
    const element = screen.getByRole('button')
    expect(element).toBeTruthy()
    expect(element.className).toBe('m-1 self-end rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-900')
  })
})
