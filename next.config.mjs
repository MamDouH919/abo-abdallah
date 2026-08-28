// Derive the CMS image host from CMS_API_URL so article images from the
// centralized CMS pass through next/image without hardcoding a domain.
/** @type {import('next').RemotePattern[]} */
const cmsRemotePatterns = [];
try {
    if (process.env.CMS_API_URL) {
        const cmsUrl = new URL(process.env.CMS_API_URL);
        cmsRemotePatterns.push({
            protocol: cmsUrl.protocol.replace(':', ''),
            hostname: cmsUrl.hostname,
            ...(cmsUrl.port ? { port: cmsUrl.port } : {}),
        });
    }
} catch {
    // invalid or missing CMS_API_URL — images will simply not be optimized
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.sabaghelkuwait.com' }],
                destination: 'https://sabaghelkuwait.com/:path*',
                permanent: true,
            },
        ];
    },
    images: {
        // The centralized CMS runs on localhost during development, which
        // next/image otherwise blocks (host resolves to a private/loopback IP).
        dangerouslyAllowLocalIP: process.env.NODE_ENV !== 'production',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            ...cmsRemotePatterns,
        ],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;
