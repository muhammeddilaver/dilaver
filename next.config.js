/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
    isrMemoryCacheSize: 0, // disable default in-memory caching
  },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
