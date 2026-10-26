import { createRequire } from 'module';

// Legacy flat `/{slug}` doorway pages → their canonical `/regions` or
// `/services` page. Source of truth is data/redirects.json (also consumed by
// lib/seo/links.ts so internal anchors skip the hop). Kept as JSON so this
// config file can load it without a build step.
const require = createRequire(import.meta.url);
/** @type {{ source: string; destination: string; permanent: boolean }[]} */
const legacyRedirects = require('./data/redirects.json');
// Images renamed from Arabic to English filenames (2026-10-21) — keeps the
// old, percent-encoded URLs (indexed in Google Images) resolving.
/** @type {{ source: string; destination: string; permanent: boolean }[]} */
const imageRedirects = require('./data/image-redirects.json');
/** @type {string[]} Bare slugs of every live /regions/{slug} page. */
const liveRegionSlugs = require('./data/regions.json').map((r) => r.slug.en.replace(/^\/+/, ''));

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
    // Dynamic routes (e.g. /articles reads searchParams) otherwise stream
    // their metadata into <body> for any UA not on Next's bot list — SEO
    // crawlers then miss the title/description/canonical/hreflang. Matching
    // every UA keeps metadata blocking, so it always lands in <head>.
    htmlLimitedBots: /.*/,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.sabaghelkuwait.com' }],
                destination: 'https://sabaghelkuwait.com/:path*',
                permanent: true,
            },
            ...legacyRedirects,
            ...imageRedirects,
            // Any other /sabaagh-{area} or /regions/sabaagh-{area} with no page
            // of its own goes to the regions hub. Live region pages are
            // excluded by the lookahead so this can never shadow them; known
            // areas are already mapped one-to-one in data/redirects.json above.
            // Slugs with a dot are excluded so files such as
            // /regions/sabaagh-alkuayt.webp (public/regions) still serve.
            { source: '/:slug(sabaagh-[^/.]+)', destination: '/regions', permanent: true },
            {
                source: `/regions/:slug((?!(?:${liveRegionSlugs.join('|')})$)sabaagh-[^/.]+)`,
                destination: '/regions',
                permanent: true,
            },
            // The static /blogs section was retired in favour of the CMS-driven
            // /articles. Specific /blogs/<slug> mappings above win; anything
            // left falls through to the articles index.
            { source: '/blogs', destination: '/articles', permanent: true },
            { source: '/blogs/:slug*', destination: '/articles', permanent: true },
        ];
    },
    // Security headers. Note: if Cloudflare (or another edge/CDN) sits in
    // front of this app, its own header rules can still override or strip
    // these — check the edge config too, this alone isn't sufficient.
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    // 2 years, includes subdomains — no `preload` until the
                    // full-year rollout is confirmed stable (preload-list
                    // removal is slow and painful if this ever needs to be
                    // walked back).
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' data: https:",
                            "font-src 'self' data:",
                            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.google.com",
                        ].join('; '),
                    },
                ],
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
