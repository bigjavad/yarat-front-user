/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
        unoptimized: true,
        deviceSizes: [],
        imageSizes: [],
        domains: [],
        loader: 'default',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            sharp: false,
        };
        return config;
    },
    experimental: {
        ignoreDevErrors: true,
    },
};

export default nextConfig;