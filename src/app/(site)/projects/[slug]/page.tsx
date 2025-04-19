import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Config } from '@/payload-types';
import Image from 'next/image';

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
			{project.imageUrl && (
				<Image
					src={project.imageUrl}
					alt={project.imageAlt || project.title}
					width={800}
					height={450}
					className='rounded-lg mb-6'
				/>
			)}
			<h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
			<p className='mb-6 text-base-content/80'>{project.description}</p>
			<h2 className='text-xl font-semibold mb-2'>Key Features</h2>
			<ul className='list-disc pl-6 space-y-1 text-base'>
				{project.features?.map((f, idx) => (
					<li key={idx}>{f?.feature}</li>
				))}
			</ul>
		</div>
	);
}
