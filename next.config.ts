//import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  swcMinify: true, // SWC is faster and more memory efficient than Babel
  images: {
    unoptimized: true, // disables built-in image optimization (memory-heavy during builds)
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack(config) {
    // Optional: limit memory-heavy Webpack plugins or adjust settings
    return config
  },
}

export default nextConfig
