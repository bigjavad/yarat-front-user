/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.mamana.app'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
