/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			'react-icons'
		],
	},
		reactStrictMode: false,
};

export default nextConfig;
