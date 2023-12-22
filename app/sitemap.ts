import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN || 'https://www.codebayu.com/'
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${domain}/roadmap?tribe=frontend-developer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/learn`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3
    }
  ]
}
