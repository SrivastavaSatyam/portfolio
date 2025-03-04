/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
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

    // Enable source maps in webpack for staging
    if (process.env.NEXT_PUBLIC_ENV === 'production') {
      config.devtool = 'source-map';
    }

    return config;
  },
};

module.exports = nextConfig; 