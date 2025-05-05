export interface Project {
	id: string;
	title: string;
	slug: string;
	description: string;
	// imageUrl?: string;
	images?: { src: string; alt?: string }[];
	imageAlt?: string;
	tech?: ({ name?: string } | string)[];
	githubLink?: string;
	liveLink?: string;
}
