import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Config } from '@/payload-types';
import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import WobbleLink from '@/components/WobbleLink';
import WobbleIcon from '@/components/WobbleIcon';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

type Project = Config['collections']['projects'];

type ProjectDetailProps = Readonly<{
	params: Promise<{ slug: string }>;
}>;

type ProjectWithMedia = Project &
	Readonly<{
		images?: ReadonlyArray<
			Readonly<{
				imageUrl: string;
				caption?: string;
			}>
		>;
		coverImageUrl?: string;
	}>;

type GalleryImage = Readonly<{
	src: string;
	alt: string;
}>;

type ProjectMediaProps = Readonly<{
	galleryImages: ReadonlyArray<GalleryImage>;
	coverImageUrl?: string;
	coverImageAlt: string;
}>;

function ProjectMedia({
	galleryImages,
	coverImageUrl,
	coverImageAlt,
}: ProjectMediaProps) {
	if (galleryImages.length > 1) {
		return (
			<div className='flex justify-center mb-6'>
				<div className='relative w-full max-w-3xl aspect-video overflow-hidden rounded-lg bg-primary-content/10'>
					<ProjectCarousel images={galleryImages} />
				</div>
			</div>
		);
	}

	const [galleryImage] = galleryImages;

	if (galleryImage) {
		return (
			<div className='flex justify-center rounded-lg bg-primary-content/10 p-4 mb-6'>
				<Image
					src={galleryImage.src}
					alt={galleryImage.alt}
					width={800}
					height={450}
					className='rounded-lg object-contain'
				/>
			</div>
		);
	}

	if (coverImageUrl) {
		return (
			<div className='flex justify-center rounded-lg bg-primary-content/10 p-4 mb-6'>
				<Image
					src={coverImageUrl}
					alt={coverImageAlt}
					width={800}
					height={450}
					className='rounded-lg object-contain'
				/>
			</div>
		);
	}

	return null;
}

export default async function ProjectDetail({
	params,
}: ProjectDetailProps) {
	const { slug } = await params;
	const payload = await getPayload({ config });
	const result = await payload.find({
		collection: 'projects',
		where: {
			slug: { equals: slug },
		},
	});

	const projectRaw = result.docs[0];
	if (!projectRaw) notFound();

	const project = projectRaw as ProjectWithMedia;
	const galleryImages: GalleryImage[] =
		project.images?.map(({ imageUrl, caption }) => ({
			src: imageUrl,
			alt: caption || project.title,
		})) ?? [];

	return (
		<div className='min-h-screen max-w-4xl mx-auto px-4 py-16'>
			<div className='flex justify-center p-1 mb-2'>
				<h1 className='inline-block text-3xl mb-6 justify-center p-3 text-secondary-content'>
					{project.title}
				</h1>
			</div>

			<ProjectMedia
				galleryImages={galleryImages}
				coverImageUrl={project.coverImageUrl}
				coverImageAlt={project.imageAlt || project.title}
			/>
			<div className='mb-6 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.description}
			</div>
			<h2 className='inline-block text-2xl font-semibold mb-4 p-3 text-primary'>
				Key Features
			</h2>
			<ul className='list-disc pl-6 space-y-1 rounded-lg bg-primary/10 p-4 text-base-content'>
				{project.features?.map((f, idx) => (
					<li key={idx}>{f?.feature}</li>
				))}
			</ul>
			<div className='flex flex-col p-6 items-center'>
				<nav className='flex gap-12'>
					{project.githubLink && (
						<WobbleIcon>
							<a
								href={project.githubLink}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub'>
								<FaGithub className='w-9 h-9 text-neutral-content hover:text-primary' />
							</a>
						</WobbleIcon>
					)}

					{project.liveLink && (
						<WobbleIcon>
							<a
								href={project.liveLink}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Live Site'>
								<FaLaptopCode className='w-9 h-9 text-neutral-content hover:text-primary' />
							</a>
						</WobbleIcon>
					)}
				</nav>

				<div className='mt-6 mb-1 flex justify-center'>
					<WobbleLink
						href='/projects'
						className='btn btn-primary text-white text-base px-4 py-2 '
						ariaLabel='Back to Projects'>
						← Back to Projects
					</WobbleLink>
				</div>
			</div>
		</div>
	);
}
