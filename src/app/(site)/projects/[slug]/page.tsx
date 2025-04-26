import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Config } from '@/payload-types';
import Image from 'next/image';
import WobbleLink from '@/components/WobbleLink';

type Project = Config['collections']['projects'];

export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const payload = await getPayload({ config });
	const result = await payload.find({
		collection: 'projects',
		where: {
			slug: { equals: slug },
		},
	});

	const project = result.docs[0] as Project;

	if (!project) return notFound();

	return (
		<div className='min-h-screen max-w-4xl mx-auto px-4 py-16 bg-base-100'>
			<h1 className='inline-block text-xl font-bold mb-6 rounded-lg bg-secondary p-3 text-secondary-content'>
				{project.title}
			</h1>
			{project.imageUrl && (
				<div className='flex justify-center rounded-lg bg-primary/10 p-4 mb-6'>
					<Image
						src={project.imageUrl}
						alt={project.imageAlt || project.title}
						width={800}
						height={450}
						className='rounded-lg object-contain'
					/>
				</div>
			)}
			<div className='mb-6 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.description}
			</div>
			<h2 className='inline-block text-xl font-semibold mb-4 rounded-lg bg-secondary p-3 text-secondary-content'>
				Key Features
			</h2>
			<ul className='list-disc pl-6 space-y-1 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.features?.map((f, idx) => (
					<li key={idx}>{f?.feature}</li>
				))}
			</ul>
			<div className="flex justify-end mb-8">
				<WobbleLink
					href="/projects"
					className="text-sm font-semibold rounded-lg bg-secondary px-4 py-2 text-secondary-content hover:underline"
					ariaLabel="Back to Projects"
				>
					← Back to Projects
				</WobbleLink>
			</div>
		</div>
	);
}
