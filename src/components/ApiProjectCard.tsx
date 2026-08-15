import type { ApiProject } from '@/types';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import WobbleIcon from './WobbleIcon';

type ApiProjectCardProps = Readonly<{
	project: ApiProject;
}>;

export default function ApiProjectCard({ project }: ApiProjectCardProps) {
	return (
		<article className='card h-full overflow-hidden rounded-xl border border-base-300 bg-base-100 text-base-content shadow-md'>
			<figure className='h-72 w-full border-b border-base-300 bg-base-300/40'>
				<Image
					src={project.diagram.src}
					alt={project.diagram.alt}
					width={project.diagram.width}
					height={project.diagram.height}
					sizes='(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw'
					className='h-full w-full object-contain p-4'
				/>
			</figure>

			<div className='card-body gap-5 p-5 sm:p-6'>
				<div>
					<h3 className='text-xl font-bold text-primary'>{project.title}</h3>
					<p className='mt-2 text-sm leading-relaxed text-base-content/80'>
						{project.description}
					</p>
				</div>

				<div>
					<h4 className='mb-2 text-sm font-semibold uppercase tracking-wide text-base-content/70'>
						Technologies
					</h4>
					<ul className='flex flex-wrap gap-2' aria-label='Technologies used'>
						{project.technologies.map((technology) => (
							<li key={technology} className='badge badge-secondary badge-sm'>
								{technology}
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className='mb-2 text-sm font-semibold uppercase tracking-wide text-base-content/70'>
						Engineering highlights
					</h4>
					<ul className='list-disc space-y-2 pl-5 text-sm leading-relaxed text-base-content/80'>
						{project.engineeringHighlights.map((highlight) => (
							<li key={highlight}>{highlight}</li>
						))}
					</ul>
				</div>

				<div className='mt-auto flex justify-center gap-4 pt-4 min-h-12'>
					<a
						href={project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`View ${project.title} on GitHub`}>
						<WobbleIcon>
							<FaGithub className='w-8 h-8 text-base-content hover:text-secondary transition-colors duration-300' />
						</WobbleIcon>
					</a>
				</div>
			</div>
		</article>
	);
}
