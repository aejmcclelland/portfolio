'use client';
import { FC } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
	title: string;
	description: string;
	tech: string[];
	github?: string;
	slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	tech,
	github,
	slug,
}) => {
	return (
		<div className='card bg-base-200 shadow-md p-6 rounded-lg hover:shadow-lg transition'>
			<Link href={`/projects/${slug}`} className='no-underline'>
				<h3 className='text-xl font-bold mb-2'>{title}</h3>
				<p className='mb-3'>{description}</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tech.map((item) => (
						<span key={item} className='badge badge-outline'>
							{item}
						</span>
					))}
				</div>
			</Link>
			{github && (
				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					className='link text-sm text-primary hover:underline'
					onClick={(e) => e.stopPropagation()} // prevents navigating to slug page
				>
					View on GitHub
				</a>
			)}
		</div>
	);
};

export default ProjectCard;
