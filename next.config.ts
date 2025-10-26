import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // Allow external images for marketing sections
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            },
            {
                protocol: 'https',
                hostname: 'www.google.com'
            },
            {
                protocol: 'https',
                hostname: 'img-prod-cms-rt-microsoft-com.akamaized.net'
            },
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org'
            }
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
}

export default nextConfig
