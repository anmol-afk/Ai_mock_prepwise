import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslist: {
    ignoreDuringBuilds: true,
  },
    typescript: {
      ignoreBuildErrors: true,
    }
};

export default nextConfig;
