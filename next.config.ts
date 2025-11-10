import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  // Your repo name becomes the base path
  basePath: '/my-resume',
  assetPrefix: '/my-resume/',

  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    // GitHub Pages is pure static hosting – no image optimization server
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
