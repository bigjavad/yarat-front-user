/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.mamana.app'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
