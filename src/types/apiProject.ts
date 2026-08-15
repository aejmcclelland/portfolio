export interface ApiProject {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly technologies: readonly string[];
	readonly engineeringHighlights: readonly string[];
	readonly diagram: Readonly<{
		src: string;
		alt: string;
		width: number;
		height: number;
	}>;
	readonly githubLink: string;
}
