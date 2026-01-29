export type SampleSlug = string;

export type SampleLink = {
	label: string;
	href: string;
};

export type SampleService = {
	title: string;
	description: string;
};

export type SampleConfig = {
	slug: SampleSlug;
	brand: string;
	tagline: string;
	description: string;
	ctas: SampleLink[];
	services: SampleService[];

	gallery?: { src: string; alt: string }[];
};
