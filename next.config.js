/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				and: [/\.(js|ts|md)x?$/],
			},
			use: ['@svgr/webpack'],
		});

		return config;
	},
	output: 'standalone',
};

module.exports = nextConfig;
