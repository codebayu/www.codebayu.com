import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SOCIAL_MEDIA } from '@/common/constant/menu'

import SocialMedia from '../SocialMedia'

describe('SocialMedia Component', () => {
  it('Should render SocialMedia component', () => {
    render(<SocialMedia items={SOCIAL_MEDIA} />)
    const container = screen.getByTestId('social-media')
    const text = screen.getByText('Let`s Connect')
    const itemsContainer = screen.getByTestId('social-media-items-container')
    const items = screen.getAllByTestId('social-media-item')
    const icons = screen.getAllByTestId('social-media-icon')

    expect(container).toBeTruthy()
    expect(container.className).toBe('flex flex-col space-y-1')
    expect(text).toBeTruthy()
    expect(text.className).toBe('font-sora mb-2 ml-2 mt-1 text-sm text-neutral-600 dark:text-neutral-500')
    expect(itemsContainer).toBeTruthy()
    expect(itemsContainer.className).toBe('flex justify-around space-x-2 px-5 pt-2 lg:justify-between')
    expect(items).toBeTruthy()
    expect(items.length).toBe(SOCIAL_MEDIA.length)
    expect(icons.length).toBe(SOCIAL_MEDIA.length)
    expect(icons[0].className).toBe(
      'text-neutral-700 transition duration-300 hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300 lg:hover:scale-110'
    )
  })

  it('Should render SocialMedia component on Me Page', () => {
    render(<SocialMedia items={SOCIAL_MEDIA} isMePage />)
    const container = screen.getAllByTestId('social-media')
    const itemsContainer = screen.getAllByTestId('social-media-items-container')

    expect(container[1]).toBeTruthy()
    expect(container[1].className).toBe('flex flex-col space-y-1 mt-6 items-center')
    expect(itemsContainer[1]).toBeTruthy()
    expect(itemsContainer[1].className).toBe('flex justify-around px-5 pt-2 lg:justify-between space-x-8')
  })
})
