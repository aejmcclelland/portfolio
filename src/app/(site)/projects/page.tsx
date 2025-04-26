export const dynamic = 'force-dynamic';
import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';

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
						const typedProject = project as {
							id: string;
							title: string;
							slug: string;
							description: string;
							imageUrl?: string;
							imageAlt?: string;
							tech?: ({ name?: string } | string)[];
							githubLink?: string;
							liveLink?: string;
						};
						return (
							<div key={typedProject.id}>
								<ProjectCard
									imageUrl={typedProject.imageUrl ?? undefined}
									alt={typedProject.imageAlt || typedProject.title}
									title={typedProject.title}
									slug={typedProject.slug}
									description={typedProject.description}
									tech={
										typedProject.tech?.map(
											(item: { name?: string } | string) => ({
												name:
													typeof item === 'string' ? item : item?.name ?? '',
											})
										) ?? []
									}
									githubLink={typedProject.githubLink ?? undefined}
									liveLink={typedProject.liveLink ?? undefined}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
