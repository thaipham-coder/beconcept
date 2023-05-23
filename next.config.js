const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/s/files/**'
            }
        ],
        domains: [
            "0.gravatar.com",
            "1.gravatar.com",
            "2.gravatar.com",
            "secure.gravatar.com",
        ],
    },
};

module.exports = withPlaiceholder(nextConfig);
