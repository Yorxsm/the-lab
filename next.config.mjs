/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'exhibot.ng' }],
                destination: 'https://www.exhibot.ng/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
