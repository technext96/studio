import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            key: 'host',
            value: 'www.technext96.com',
          },
        ],
        destination: 'https://technext96.com/:path*',
        permanent: true,
      },
      // Redirect HTTP → HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'protocol',
            key: 'protocol',
            value: 'http',
          },
        ],
        destination: 'https://technext96.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
