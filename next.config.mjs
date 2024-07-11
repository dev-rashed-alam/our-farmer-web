/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'academy.algomatrixs.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
