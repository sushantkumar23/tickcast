/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "solanart.io",
      "tailwindui.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
    ],
  },
}

module.exports = nextConfig
