import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@prisma/client'],
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
