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
                hostname: 'srv498043.hstgr.cloud',
            }
        ]
    }
}

module.exports = nextConfig
