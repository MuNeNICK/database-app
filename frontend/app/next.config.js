/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [`${process.env.NEXT_PUBLIC_DOMAIN}`],
      minimumCacheTTL: 60,
    },
};
  
module.exports = nextConfig;
