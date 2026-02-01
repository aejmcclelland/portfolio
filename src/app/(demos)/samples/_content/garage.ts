// src/app/(site)/samples/_content/garage.ts
import type { SampleConfig } from '@/types/sample';

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
	theme: 'auto',

	contact: {
		phone: '+442812345678',
		whatsapp: '+447700900123',
		email: 'hello@autohaus.example',
		city: 'Bangor',
		serviceArea: 'Bangor & surrounding areas',
	},

	openingHours: [
		{ day: 'Mon–Fri', hours: '08:00–17:00' },
		{ day: 'Sat', hours: 'Closed' },
		{ day: 'Sun', hours: 'Closed' },
	],

	highlights: [
		'Friendly, honest advice',
		'Fast turnaround on common repairs',
		'Clear pricing before work starts',
		'Call or WhatsApp for a quick quote',
	],

	prices: [
		{ title: 'MOT test', price: '£45', note: 'Call to confirm availability' },
		{ title: 'Interim service', price: 'from £99' },
		{ title: 'Diagnostics', price: 'from £35' },
	],

	reviews: [
		{
			name: 'Mark D.',
			rating: 5,
			text: 'Quick MOT and great service — explained everything clearly.',
		},
		{
			name: 'Sarah K.',
			rating: 5,
			text: 'Booked in easily and the repair was done the same day. Highly recommend.',
		},
	],

	faqs: [
		{
			q: 'Do I need to book an MOT in advance?',
			a: 'Yes — call or WhatsApp and we’ll confirm the next available slot.',
		},
		{
			q: 'Can you quote from photos?',
			a: 'Often yes. Send a WhatsApp message with your reg and a photo of the issue.',
		},
		{
			q: 'Do you use manufacturer parts?',
			a: 'We’ll advise the best option and confirm pricing with you before any work starts.',
		},
	],
};
