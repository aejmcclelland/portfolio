import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';
import type { Config } from '@/payload-types';

type Project = Config['collections']['projects'];

export default async function ProjectsPage() {
	const payload = await getPayload({ config });

	const { docs: projects } = await payload.find({
		collection: 'projects',
	});

	return (
		<section className='min-h-screen px-6 py-20 sm:px-10 bg-base-100'>
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-6'>Projects</h2>
				<p className='mb-12 text-base-content/80'>
					A few selected projects that showcase my full-stack skills in building
					clean, scalable, and modern web applications.
				</p>

				<div className='grid gap-8 md:grid-cols-2'>
					{projects.map((project) => {
						const typedProject = project as Project;
						return (
							<div key={typedProject.id}>
								<ProjectCard
									imageUrl={typedProject.imageUrl ?? undefined}
									alt={typedProject.imageAlt || typedProject.title}
									title={typedProject.title}
									slug={typedProject.slug}
									description={typedProject.description}
									tech={
										typedProject.tech?.map((item) => ({
											name: typeof item === 'string' ? item : item?.name ?? '',
										})) ?? []
									}
									github={typedProject.githubLink ?? undefined}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
