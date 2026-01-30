import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Project } from '@/types';

// Utilities are fetched from Payload at request time
export const dynamic = 'force-dynamic';

type RawProject = {
	id: string;
	title: string;
	slug: string;
	description: string;
	projectType?: string;
	images?: { imageUrl: string; caption?: string }[];
	tech: { name: string }[];
	githubLink?: string;
	liveLink?: string;
};

export default async function UtilitiesPage() {
	const payload = await getPayload({ config });

	const findResult = await payload.find({
		collection: 'projects',
		sort: '-createdAt',
	});

	const projects = findResult.docs as RawProject[];

	const projectList: Project[] = projects.map((p) => ({
		id: p.id,
		title: p.title,
		slug: p.slug,
		description: p.description,
		projectType: p.projectType,
		images: p.images?.map((img) => ({
			src: img.imageUrl,
			alt: img.caption || p.title,
		})),
		tech: p.tech || [],
		githubLink: p.githubLink,
		liveLink: p.liveLink,
	}));

	// Expect your Payload Projects collection to include an option like: "localTool"
	const utilities = projectList.filter((p) => p.projectType === 'localTool');

	return (
		<main className='min-h-screen px-6 py-20 sm:px-10 bg-base-200 text-base-content'>
			<div className='max-w-5xl mx-auto space-y-16'>
				<section>
					<div className='text-center mb-10'>
						<h1 className='text-4xl font-bold mb-4 text-primary'>Utilities</h1>
						<p className='text-base-content/80 max-w-2xl mx-auto'>
							A small set of reusable scripts and utilities I’ve built to support my main projects — automation, repeatable workflows, and keeping things consistent. Most are designed to run locally; each entry links to the repo with setup instructions.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 auto-rows-fr'>
						{utilities.map((project) => (
							<div key={project.id} className='h-full'>
								<ProjectCard
									images={project.images}
									title={project.title}
									slug={project.slug}
									description={project.description}
									tech={project.tech}
									githubLink={project.githubLink}
									liveLink={project.liveLink}
								/>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}