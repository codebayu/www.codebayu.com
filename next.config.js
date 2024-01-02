/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'lh3.googleusercontent.com']
  },
  env: {
    GTM_ID: process.env.GTM_ID
  }
}

module.exports = nextConfig
