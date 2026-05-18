/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    async rewrites() {
        return [
            {
                source: '/الخدمات',
                destination: '/services',
            },
            {
                source: '/الخدمات/:id*',
                destination: '/services/:id*',
            },
            {
                source: '/المناطق',
                destination: '/regions',
            },
            {
                source: '/المناطق/:id*',
                destination: '/regions/:id*',
            },
            {
                source: '/المقالات',
                destination: '/blogs',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;
