import type { SampleConfig } from '@/types/sample';

export const beautySample: SampleConfig = {
	slug: 'beauty',
	brand: 'Beauty Bliss',
	tagline: 'Your local haven for beauty and wellness.',
	description:
		'A client-ready one-page template for local beauty salons: clear services, trust signals, and strong calls-to-action.',

	ctas: [
		{ label: 'Call now', href: 'tel:+442812345678' },
		{ label: 'Get a quote', href: '#contact' },
	],

	services: [
		{
			title: 'Nails & Styling',
			description: 'Professional nails and feet styling.',
		},
		{
			title: 'Wellness',
			description: 'Relaxing treatments and wellness packages.',
		},
		{
			title: 'Facials',
			description: 'Customised facial treatments for all skin types.',
		},
	],

	gallery: [
		{ src: '/samples/beauty/beauty-01.jpg', alt: 'Beauty salon interior' },
		{ src: '/samples/beauty/beauty-02.jpg', alt: 'Professional nail styling' },
	],
};
