'use client';

import { FC } from 'react';
import Link from 'next/link';
import ProjectCarousel from './ProjectCarousel';
import Image from 'next/image';
import WobbleIcon from './WobbleIcon';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

interface ProjectCardProps {
	title: string;
	description: string;
	images?: { src: string; alt?: string }[];
	tech?: { name: string }[];
	slug: string;
	githubLink?: string;
	liveLink?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	images,
	tech = [],
	githubLink,
	liveLink,
	slug,
}) => {
	return (
		<div className='card max-w-xl mx-auto bg-base-100 text-base-content shadow-md p-6 rounded-lg hover:shadow-lg transition cursor-pointer sm:p-6 md:p-8 h-full flex flex-col'>
			{images && images.length > 0 && (
				<div className='mb-4 shrink-0'>
					{images.length > 1 ? (
						<ProjectCarousel images={images} />
					) : (
						<Image
							src={images[0].src}
							alt={images[0].alt || title}
							width={600}
							height={400}
							className='rounded-lg w-full object-cover'
						/>
					)}
				</div>
			)}
			<Link
				href={`/projects/${slug}`}
				className='no-underline'
				aria-label={`View project: ${title}`}>
				<h3 className='text-2xl md:text-3xl font-bold mb-2 text-primary'>
					{title}
				</h3>
				<p className='mb-4 text-base-content text-sm md:text-base line-clamp-4 min-h-18'>
					{description}
				</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tech.map((item, idx) => (
						<span
							key={`${item.name}-${idx}`}
							className='badge badge-secondary text-xs md:text-sm'>
							{item.name}
						</span>
					))}
				</div>
			</Link>
			{(githubLink || liveLink) && (
				<div className='mt-auto flex justify-center gap-4 pt-4 min-h-12'>
					{githubLink && (
						<a
							href={githubLink}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'
							onClick={(e) => e.stopPropagation()}>
							<WobbleIcon>
								<FaGithub className='w-8 h-8 text-base-content hover:text-secondary transition-colors duration-300' />
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
