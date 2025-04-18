'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl?: string;
	tech: { name: string }[];
	github?: string;
	slug: string;
	alt?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	tech,
	github,
	slug,
	alt,
}) => {
	return (
		<div className='card max-w-xl mx-auto bg-base-200 shadow-md p-6 rounded-lg hover:shadow-lg transition cursor-pointer sm:p-6 md:p-8'>
			{imageUrl && (
				<div className='mb-4'>
					<Image
						src={imageUrl}
						alt={alt || title}
						width={600}
						height={400}
						className='rounded-lg w-full object-contain bg-base-200'
					/>
				</div>
			)}
			<Link href={`/projects/${slug}`} className='no-underline'>
				<h3 className='text-2xl md:text-3xl font-bold mb-2'>{title}</h3>
				<p className='mb-4 text-base-content text-sm md:text-base'>
					{description}
				</p>
			</Link>
			<div className='flex flex-wrap gap-2 mb-4'>
				{tech?.map((item, idx) => (
					<span
						key={`${item.name ?? 'tech'}-${idx}`}
						className='badge badge-outline text-xs md:text-sm'>
						{item.name}
					</span>
				))}
			</div>
			{github && (
				<div className='pt-2'>
					<span
						onClick={(e) => {
							e.stopPropagation();
							window.open(github, '_blank');
						}}
						className='link text-sm text-primary hover:underline cursor-pointer'>
						View on GitHub
					</span>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
