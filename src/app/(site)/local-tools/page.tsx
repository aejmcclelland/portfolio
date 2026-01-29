export const dynamic = 'force-dynamic';
import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Project } from '@/types';

type RawProject = {
    id: string;
    title: string;
    slug: string;
    description: string;
    images?: { imageUrl: string; caption?: string }[];
    tech?: (string | { name?: string })[];
    githubLink?: string;
    liveLink?: string;
};

export default async function ProjectsPage() {
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
		images: p.images?.map((img) => ({
			src: img.imageUrl,
			alt: img.caption || p.title,
		})),
		tech: (p.tech || []).map((t) =>
			typeof t === 'string' ? { name: t } : { name: t.name || '' },
		),
		githubLink: p.githubLink,
		liveLink: p.liveLink,
	}));

	const applications = projectList.filter(
		(p: any) => p.projectType === 'application',
	);

	return (
		<main className='min-h-screen px-6 py-20 sm:px-10 bg-base-200 text-base-content'>
			<div className='max-w-5xl mx-auto space-y-16'>
				{/* Applications section */}
				<section>
					<div className='text-center mb-10'>
						<h1 className='text-4xl font-bold mb-4 text-primary'>
							Local Tools
						</h1>
						<p className='text-base-content/80 max-w-2xl mx-auto'>
							Sometimes I get the chance to build tools specifically for my projects or try and learn some new technology. Here are a few of those local tools I've built to help with various tasks. All can be run locally if you visit their respective GitHub repositories.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 auto-rows-fr'>
						{applications.map((project) => (
							<div key={project.id} className='h-full'>
								<ProjectCard
									images={project.images}
									title={project.title}
									slug={project.slug}
									description={project.description}
									tech={(project.tech || []).map((t) =>
										typeof t === 'string'
											? { name: t }
											: { name: (t as { name?: string }).name || '' },
									)}
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