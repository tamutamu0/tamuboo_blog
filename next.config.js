/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfigm,
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
