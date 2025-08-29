/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	experimental: {
		optimizePackageImports: [
			'react-icons'
		],
	},
		reactStrictMode: false,
};

export default nextConfig;
