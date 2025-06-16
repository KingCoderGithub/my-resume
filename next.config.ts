
import type {NextConfig} from 'next';

// Replace with your GitHub repository name
const GITHUB_REPOSITORY_NAME = 'my-resume';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  // basePath and assetPrefix are needed if you're deploying to a subpath on GitHub Pages
  // e.g., https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
  // If deploying to a custom domain or a root path, these can be removed or set to ''.
  basePath: isGithubActions ? `/${GITHUB_REPOSITORY_NAME}` : '',
  assetPrefix: isGithubActions ? `/${GITHUB_REPOSITORY_NAME}/` : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Image optimization is not supported in static export on GitHub Pages
    unoptimized: true,
    // Keep your existing remotePatterns if needed, but they also rely on the image being accessible
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
