import ProjectCard from '@/components/ProjectCard';
import { getPayload } from 'payload';
import config from '@payload-config';
import Image from 'next/image';

export default async function ProjectsPage() {
	const payload = await getPayload({ config });

	const { docs: projects } = await payload.find({
		collection: 'projects',
	});
	console.log(projects);

	return (
		<section className='min-h-screen px-6 py-20 sm:px-10 bg-base-100'>
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-6'>Projects</h2>
				<p className='mb-12 text-base-content/80'>
					A few selected projects that showcase my full-stack skills in building
					clean, scalable, and modern web applications.
				</p>

				<div className='grid gap-8 md:grid-cols-2'>
					{projects.map((project: any) => (
						<div key={project.id}>
							<ProjectCard
								imageUrl={project.imageUrl}
								alt={project.imageAlt || project.title}
								title={project.title}
								slug={project.slug}
								description={project.description}
								tech={project.tech}
								github={project.githubLink}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
