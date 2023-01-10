/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [`${process.env.NEXT_PUBLIC_DOMAIN}`, `codimd-app--main--database-app--munenick.coder.munenick.me`, `www.munenick.me`],
      minimumCacheTTL: 60,
    },
};
  
module.exports = nextConfig;
