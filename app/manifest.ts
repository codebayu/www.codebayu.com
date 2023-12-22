import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bayu Setiawan - Software Engineer',
    short_name: 'Bayu Setiawan',
    description: 'Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Bayu',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
