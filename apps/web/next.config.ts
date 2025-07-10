import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@prisma/client'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
