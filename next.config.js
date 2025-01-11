// If you already have other configurations
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your other config options
  images: {
    domains: [
      "pbs.twimg.com",
      // ... any other domains you're using
    ],
  },
};

module.exports = nextConfig;
