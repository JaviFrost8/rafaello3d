import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://rafaello3d.es/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
