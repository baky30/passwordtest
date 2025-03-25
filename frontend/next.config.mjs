/**
 * @type {import('next').NextConfig}
 */
const output = process.env.NODE_ENV === 'production' ? 'export' : 'standalone';
const nextConfig = {
  trailingSlash: true,
  distDir: 'build',
  output,
  basePath: '',
  swcMinify: false,
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
