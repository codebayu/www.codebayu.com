import axios from 'axios'

import { reportError } from '@/common/helpers/error'
import { BlogItem } from '@/common/types/blog'

export async function getBlogViews(searchParams: string) {
  try {
    const URL = `https://dev.to/api/articles/me/all`
    const response = await axios.get(URL, {
      headers: {
        'api-key': process.env.DEVTO_KEY
      }
    })
    const data = response.data

    const findArticle = data?.find((blog: BlogItem) => blog.id === parseInt(searchParams))
    const page_views_count: number = findArticle?.page_views_count
    return page_views_count
  } catch (error) {
    reportError({ error, service: 'getBlogViews' })
    return 0
  }
}
