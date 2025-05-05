export const dynamic = 'force-dynamic';
import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Project } from '@/types';

export default async function ProjectsPage() {
	const payload = await getPayload({ config });

	const { docs: projects } = await payload.find({
		collection: 'projects',
	});
	// Transform raw payload docs into strongly-typed Project objects
	const projectList: Project[] = projects.map((p: any) => ({
		id: p.id,
		title: p.title,
		slug: p.slug,
		description: p.description,
		images: p.images?.map((img: any) => ({
			src: img.imageUrl,
			alt: img.caption || p.title,
		})),
		tech: (p.tech || []).map((t: any) =>
			typeof t === 'string' ? { name: t } : { name: t.name || '' }
		),
		githubLink: p.githubLink,
		liveLink: p.liveLink,
	}));

	return (
		<section className='min-h-screen px-6 py-20 sm:px-10 bg-base-100'>
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-6'>Projects</h2>
				<p className='mb-12 text-base-content/80'>
					A few selected projects that showcase my full-stack skills in building
					clean, scalable, and modern web applications.
				</p>

				<div className='grid gap-8 md:grid-cols-2'>
					{projectList.map((project) => {
						return (
							<div key={project.id}>
								<ProjectCard
									images={project.images}
									title={project.title}
									slug={project.slug}
									description={project.description}
									tech={(project.tech || []).map((t) =>
										typeof t === 'string'
											? { name: t }
											: { name: (t as { name?: string }).name || '' }
									)}
									githubLink={project.githubLink}
									liveLink={project.liveLink}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
