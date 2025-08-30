/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        // این باعث میشه TypeScript ارور نده موقع بیلد
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
