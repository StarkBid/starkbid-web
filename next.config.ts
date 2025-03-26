import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
  },
};

export default nextConfig;
