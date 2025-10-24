/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESOURCE_SECRET: process.env.RESOURCE_SECRET,
    NEXT_PUBLIC_BASE_NETWORK: process.env.NEXT_PUBLIC_BASE_NETWORK,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
