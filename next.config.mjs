/** @type {import('next').NextConfig} */
const nextConfig = {


    reactStrictMode: true,

    images: {
        unoptimized: true,   // بهینه‌سازی خاموش
        domains: ['api.yaratmotors.com'],

    },

    experimental: {
        disableStaticImages: true, // دیگه اجازه import عکس از src نمی‌ده
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },

};

export default nextConfig;
