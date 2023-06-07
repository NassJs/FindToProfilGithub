/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'hydeparkwinterwonderland.com'
            },
            {
                protocol: 'https',
                hostname: 'wembleypark.com'
            },
            {
                protocol: 'https',
                port: '',
                hostname: 'avatars.githubusercontent.com'
            },

        ]
    }
}

module.exports = nextConfig
