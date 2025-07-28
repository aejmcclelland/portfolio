/ ** @type {import('tailwindcss').Config} */
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
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('daisyui')],
	daisyui: {
		themes: [
			{
				portfolioLofi: {
					default: false,
					prefersdark: false,
					'color-scheme': 'light',
					'--color-base-100': 'oklch(100% 0 0)',
					'--color-base-200': 'oklch(90% 0.058 230.902)',
					'--color-base-300': 'oklch(86% 0.022 252.894)',
					'--color-base-content': 'oklch(0% 0 0)',
					'--color-primary': 'oklch(90% 0.058 230.902)',
					'--color-primary-content': 'oklch(27% 0.041 260.031)',
					'--color-secondary': 'oklch(55% 0.027 264.364)',
					'--color-secondary-content': 'oklch(100% 0 0)',
					'--color-accent': 'oklch(85% 0.199 91.936)',
					'--color-accent-content': 'oklch(37% 0.044 257.287)',
					'--color-neutral': 'oklch(70% 0.191 22.216)',
					'--color-neutral-content': 'oklch(100% 0 0)',
					'--color-info': 'oklch(88% 0.059 254.128)',
					'--color-info-content': 'oklch(55% 0.046 257.417)',
					'--color-success': 'oklch(70% 0.04 256.788)',
					'--color-success-content': 'oklch(37% 0.034 259.733)',
					'--color-warning': 'oklch(90% 0.182 98.111)',
					'--color-warning-content': 'oklch(55% 0.046 257.417)',
					'--color-error': 'oklch(70% 0.191 22.216)',
					'--color-error-content': 'oklch(15.732% 0.03 28.47)',
					'--radius-selector': '2rem',
					'--radius-field': '0.25rem',
					'--radius-box': '0.5rem',
					'--size-selector': '0.25rem',
					'--size-field': '0.25rem',
					'--border': '1px',
					'--depth': '0',
					'--noise': '0',
				},
			},
			"dim"
		],
		darkTheme: "dim",
	},
};
