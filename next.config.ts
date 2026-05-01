import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://rafaello3d.es/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
