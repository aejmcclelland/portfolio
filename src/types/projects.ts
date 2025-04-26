export interface Project {
	id: string;
	title: string;
	slug: string;
	description: string;
	imageUrl?: string;
	imageAlt?: string;
	tech?: ({ name?: string } | string)[];
	githubLink?: string;
	liveLink?: string;
}
