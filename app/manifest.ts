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
        src: '/img/logo-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/img/logo-384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: '/img/logo-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
