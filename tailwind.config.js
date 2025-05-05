/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				// match any path under your Cloudinary account
				pathname: '/dqeszgo28/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/media/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/api/media/file/**',
			},
		], //Allow Cloudinary images
	},
	theme: {
		extend: {
			fontFamily: {
				grotesk: ['var(--font-grotesk)'],
			},
			colors: {
				primary: '#4f46e5', // indigo-600 or your brand color
				accent: '#d946ef', // optional secondary color
			},
		},
		plugins: [
			require('@tailwindcss/aspect-ratio'),
			// any other plugins…
		],
	},
};
