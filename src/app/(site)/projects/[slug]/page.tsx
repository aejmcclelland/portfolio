import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Config } from '@/payload-types';
import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import WobbleLink from '@/components/WobbleLink';
import WobbleIcon from '@/components/WobbleIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

	const projectRaw = result.docs[0];
	type ProjectWithMedia = Project & {
		images?: { imageUrl: string; caption?: string }[];
		coverImageUrl?: string;
		imageAlt?: string;
	};
	const project = projectRaw as ProjectWithMedia;

	// --- normalize gallery images into a typed array, fallback to coverImageUrl ---
	type GalleryImage = { src: string; alt: string };

	const galleryImages: GalleryImage[] =
		project.images?.map(({ imageUrl, caption }) => ({
			src: imageUrl,
			alt: caption || project.title,
		})) ?? [];
	// --- end normalization ---

	if (!project) return notFound();

	return (
		<div className='min-h-screen max-w-4xl mx-auto px-4 py-16 bg-base-100'>
			<div className='flex justify-center p-1 mb-2'>
				<h1 className='inline-block text-3xl mb-6 justify-center p-3 text-secondary-content'>
					{project.title}
				</h1>
			</div>

			{galleryImages.length > 1 ? (
				<div className='flex justify-center mb-6'>
					<div className='relative w-full max-w-3xl aspect-video overflow-hidden rounded-lg bg-primary-content/10'>
						<ProjectCarousel images={galleryImages} />
					</div>
				</div>
			) : galleryImages.length === 1 ? (
				<div className='flex justify-center rounded-lg bg-primary-content/10 p-4 mb-6'>
					<Image
						src={galleryImages[0].src}
						alt={galleryImages[0].alt}
						width={800}
						height={450}
						className='rounded-lg object-contain'
					/>
				</div>
			) : project.coverImageUrl ? (
				<div className='flex justify-center rounded-lg bg-primary-content/10 p-4 mb-6'>
					<Image
						src={project.coverImageUrl}
						alt={project.imageAlt || project.title}
						width={800}
						height={450}
						className='rounded-lg object-contain'
					/>
				</div>
			) : null}
			<div className='mb-6 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.description}
			</div>
			<h2 className='inline-block text-2xl font-semibold mb-4 p-3 text-secondary-content'>
				Key Features
			</h2>
			<ul className='list-disc pl-6 space-y-1 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.features?.map((f, idx) => (
					<li key={idx}>{f?.feature}</li>
				))}
			</ul>
			<div className='flex flex-col p-6 items-center'>
				<nav className='flex gap-12'>
					<WobbleIcon>
						<a
							href='https://github.com/aejmcclelland'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'>
							<FaGithub className='w-9 h-9 text-neutral-content hover:text-primary' />
						</a>
					</WobbleIcon>

					<WobbleIcon>
						<a
							href='https://linkedin.com/in/aejmcclelland'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'>
							<FaLinkedin className='w-9 h-9 text-neutral-content hover:text-primary' />
						</a>
					</WobbleIcon>
				</nav>

				<div className='mt-4 mb-8 text-center'>
					<WobbleLink
						href='/projects'
						className='text-sm rounded-lg bg-primary px-4 py-2 text-secondary-content hover:underline'
						ariaLabel='Back to Projects'>
						← Back to Projects
					</WobbleLink>
				</div>
			</div>
		</div>
	);
}
