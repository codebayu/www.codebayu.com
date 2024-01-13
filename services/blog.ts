import axios from 'axios'

import { DEVTO_BLOG_API } from '@/common/constant'
import { reportError } from '@/common/helpers/error'
import { BlogDetailProps, BlogItem, CommentItemProps } from '@/common/types/blog'

type Props = {
  params: { content: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function getBlogDataServices(): Promise<BlogItem[]> {
  try {
    const response = await axios.get(DEVTO_BLOG_API)
    return response.data
  } catch (error) {
    reportError({ error, service: 'getBlogDataServices' })
    return {} as BlogItem[]
  }
}

export async function getBlogDetailServices({ searchParams }: Props): Promise<BlogDetailProps> {
  try {
    const URL = `https://dev.to/api/articles/${searchParams.id}`
    const response = await axios.get(URL, {
      headers: {
        'api-key': process.env.DEVTO_KEY
      }
    })
    return response.data
  } catch (error) {
    reportError({ error, service: 'getBlogDetailServices' })
    return {} as BlogDetailProps
  }
}

export async function getCommentsServices(postId: string): Promise<CommentItemProps[]> {
  try {
    const DEV_TO_URL = `https://dev.to/api/comments/?a_id=${postId}`
    const response = await axios.get(DEV_TO_URL, {
      headers: {
        'api-key': process.env.DEVTO_KEY
      }
    })
    return response.data
  } catch (error) {
    reportError({ error, service: 'getCommentsServices' })
    return []
  }
}
