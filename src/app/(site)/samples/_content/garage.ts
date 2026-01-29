import type { SampleConfig } from '@/app/(site)/samples/_content/types';

export const garageSample: SampleConfig = {
	slug: 'garage',
	brand: 'Autohaus',
	tagline: 'Reliable MOTs, servicing, and repairs in Belfast.',
	description:
		'A client-ready one-page template for local garages: clear services, trust signals, and strong calls-to-action.',

	ctas: [
		{ label: 'Call now', href: 'tel:+442812345678' },
		{ label: 'Get a quote', href: '#contact' },
	],

	services: [
		{
			title: 'MOT Testing',
			description: 'Fast turnaround with clear pricing.',
		},
		{
			title: 'Servicing',
			description: 'Interim and full services for all makes.',
		},
		{ title: 'Repairs', description: 'Brakes, tyres, diagnostics, and more.' },
	],

	gallery: [
		{ src: '/samples/garage/garage-01.jpg', alt: 'Garage workshop' },
		{ src: '/samples/garage/garage-02.jpg', alt: 'Technician working on car' },
	],
};