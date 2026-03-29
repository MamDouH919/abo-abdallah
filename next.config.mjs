/** @type {import('next').NextConfig} */
const nextConfig = {
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
        domains: ['images.unsplash.com'], // ✅ add allowed image domain
    },
};

export default nextConfig;