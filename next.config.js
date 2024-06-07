/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.ghost.org',
            },
            {
                protocol: 'https',
                hostname: 'ahmouse.dev',
            },
            {
                protocol: 'https',
                hostname: '*.unsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
