/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't bundle Node.js specific modules for the client-side and Edge environments
      // Use IgnorePlugin to prevent bundling of specific modules in Edge environments
      config.plugins.push(
        new (require('webpack').IgnorePlugin)({
          resourceRegExp: /^(?:@clerk\/shared\/devBrowser|crypto)$/,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;