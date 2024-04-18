/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to'
      }
    ]
  },
  env: {
    GTM_ID: process.env.GTM_ID,
    GOOGLE_ADSENSE_UNIT_BLOG_CLIENT: process.env.GOOGLE_ADSENSE_UNIT_BLOG_CLIENT,
    GOOGLE_ADSENSE_UNIT_BLOG_SLOT: process.env.GOOGLE_ADSENSE_UNIT_BLOG_SLOT
  }
}

module.exports = nextConfig
