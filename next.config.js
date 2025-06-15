/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't bundle Node.js specific modules for the client-side and Edge environments
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false, // This will make `crypto` resolve to an empty module
      };
    }
      // Resolve @clerk/shared/devBrowser to false for client/Edge builds
      config.resolve.alias = {
        ...config.resolve.alias,
        '@clerk/shared/devBrowser': false,
      };
    return config;
  },
};

module.exports = nextConfig;