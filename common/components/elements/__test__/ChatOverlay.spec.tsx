import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ChatOverlay from '../ChatOverlay'

describe('ChatOverlay Component', () => {
  it('Should render chat overlay element', () => {
    render(<ChatOverlay />)
    const element = screen.getByTestId('chat-overlay')
    expect(element).toBeTruthy()
    expect(element.className).toBe(
      'fixed bottom-2 right-2 flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-300 hover:-rotate-12 hover:scale-105 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700'
    )
  })
})
