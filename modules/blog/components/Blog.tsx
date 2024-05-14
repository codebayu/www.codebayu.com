import { BlogItem } from '@/common/types/blog'

import BlogCard from './BlogCard'
import BlogHeader from './BlogHeader'
import BlogThumbnail from './BlogThumbnail'

interface BlogProps {
  blogs: BlogItem[]
}

export default function Blog({ blogs }: BlogProps) {
  return (
    <>
      <BlogHeader />
      <BlogThumbnail newestBlog={blogs[0]} />
      <h3 className="mb-4 mt-10 hidden font-semibold text-neutral-700 transition-all duration-300 dark:text-neutral-200 md:block md:text-xl">
        Related Articles
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogs?.slice(1).map((item: BlogItem, index: number) => <BlogCard key={index} {...item} />)}
      </div>
    </>
  )
}
