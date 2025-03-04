/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/portfolio' : '';

const nextConfig = {
  basePath,
  ...(isProduction && {
    output: 'export',
    distDir: 'build',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || basePath
  }),
  experimental: {
    webpackBuildWorker: true,
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource',
    });

    // Enable source maps in webpack for production
    if (isProduction) {
      config.devtool = 'source-map';
    }

    return config;
  },
};

module.exports = nextConfig; 