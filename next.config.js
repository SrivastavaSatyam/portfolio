/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';

const nextConfig = {
  basePath: isProduction ? basePath : '',
  ...(isProduction && {
    output: 'export',
    distDir: 'build',
    assetPrefix: basePath,
  }),
  experimental: {
    webpackBuildWorker: true,
  },
  images: {
    unoptimized: true,
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