/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/infancias', destination: '/primera-infancia', permanent: true },
    ]
  },
}

export default nextConfig
