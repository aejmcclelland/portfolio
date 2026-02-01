export type SampleSlug = string;

export type SampleLink = {
	label: string;
	href: string;
};

export type SampleService = {
	title: string;
	description: string;
};

export type SampleReview = {
	name: string;
	rating: 1 | 2 | 3 | 4 | 5;
	text: string;
};

export type SampleFaq = {
	q: string;
	a: string;
};

export type SamplePrice = {
	title: string;
	price: string;
	note?: string;
};

export type SampleContact = {
	phone?: string;
	whatsapp?: string;
	email?: string;
	address?: string;
	postcode?: string;
	city?: string;
	serviceArea?: string;
};

export type SampleSocials = {
	instagram?: string;
	facebook?: string;
	googleMaps?: string;
};

export type SampleOpeningHours = Array<{ day: string; hours: string }>;

export type SampleConfig = {
	slug: SampleSlug;
	brand: string;
	tagline: string;
	description: string;

	// Optional styling hook (e.g. daisyUI theme name)
	theme?: string;

	// Optional business details
	contact?: SampleContact;
	openingHours?: SampleOpeningHours;
	socials?: SampleSocials;

	// Optional conversion/trust content
	highlights?: string[];
	reviews?: SampleReview[];
	faqs?: SampleFaq[];
	prices?: SamplePrice[];

	// Core page content
	ctas: SampleLink[];
	services: SampleService[];

	gallery?: { src: string; alt: string }[];
};
