export interface Project {
	id: string;
	title: string;
	slug: string;
	description: string;
	projectType?: string;
	images?: { src: string; alt?: string }[];
	imageAlt?: string;
	tech?: { name: string}[];
	githubLink?: string;
	liveLink?: string;
}
