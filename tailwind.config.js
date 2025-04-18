/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	images: {
		domains: ['res.cloudinary.com'], // Allow Cloudinary images
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
	},
};
