/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/admin',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html',
          },
        ],
      },
    ];
  },
};
export default nextConfig;
