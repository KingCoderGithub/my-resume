
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // REMOVED: No longer exporting statically
  // basePath: '', // REMOVED: Not needed for Firebase Hosting root deployment
  // assetPrefix: '', // REMOVED: Not needed for Firebase Hosting

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Image optimization might not be fully supported by default on standard Firebase Hosting
    // For Firebase App Hosting, it often handles Next.js features well.
    // Keeping unoptimized: true can be safer initially, or you can test removing it.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
