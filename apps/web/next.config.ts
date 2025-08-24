import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },

  },
  serverExternalPackages: ["@prisma/client", "prisma"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
