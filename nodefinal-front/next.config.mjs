/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com', 'demo-alukas.myshopify.com'], // Kullanmakta olduğunuz alan adlarını ekleyin
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
