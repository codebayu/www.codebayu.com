import { describe, expect, it } from 'vitest'

import { formatBlogSlug, formatDate } from '..'

describe('Helper Function', () => {
  it('Should running formatDate function successfully', () => {
    const formatDateFunction = formatDate('2023-09-12T02:59:33Z')
    expect(formatDateFunction).toBe('September 12, 2023')
  })

  it('Should running formatBlogSlug function successfully', () => {
    const formatBlogSlugFunction = formatBlogSlug('spas-vs-mpas-in-web-development-4cd8')
    expect(formatBlogSlugFunction).toBe('spas-vs-mpas-in-web-development')
  })
})
