/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/.well-known/apple-developer-merchantid-domain-association',
				headers: [
					{ key: 'Content-Type', value: 'text/plain' },
					{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
				],
			},
		]
	},
}

module.exports = nextConfig