import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        typedRoutes: true,
        serverComponentsExternalPackages: ["@prisma/client"],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/s/files/**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dcrkgm1px/image/upload/**'
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
                pathname: '/avatar/**'
            }
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default withContentlayer(nextConfig)
