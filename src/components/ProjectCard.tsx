'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WobbleIcon from './WobbleIcon';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl?: string;
	tech: { name: string }[];
	slug: string;
	alt?: string;
	githubLink?: string;
	liveLink?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	tech,
	githubLink,
	liveLink,
	slug,
	alt,
}) => {
	return (
		<div className='card max-w-xl mx-auto bg-base-200 shadow-md p-6 rounded-lg hover:shadow-lg transition cursor-pointer sm:p-6 md:p-8'>
			<Link
				href={`/projects/${slug}`}
				className='no-underline'
				aria-label={`View project: ${title}`}>
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
				<h3 className='text-2xl md:text-3xl font-bold mb-2'>{title}</h3>
				<p className='mb-4 text-base-content text-sm md:text-base'>
					{description}
				</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tech?.map((item, idx) => (
						<span
							key={`${item.name ?? 'tech'}-${idx}`}
							className='badge badge-outline text-xs md:text-sm'>
							{item.name}
						</span>
					))}
				</div>
			</Link>
			{(githubLink || liveLink) && (
				<div className='flex justify-center items-center gap-6 mt-6'>
					{githubLink && (
						<a
							href={githubLink}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'
							onClick={(e) => e.stopPropagation()}>
							<WobbleIcon>
								<FaGithub
									className='w-8 h-8 text-base-content hover:text-secondary

 transition-colors duration-300'
								/>
							</WobbleIcon>
						</a>
					)}
					{liveLink && (
						<a
							href={liveLink}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Live Site'
							onClick={(e) => e.stopPropagation()}>
							<WobbleIcon>
								<FaLaptopCode className='w-8 h-8 text-base-content hover:text-primary transition-colors duration-300' />
							</WobbleIcon>
						</a>
					)}
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
