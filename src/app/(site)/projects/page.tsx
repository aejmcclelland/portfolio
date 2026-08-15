export const dynamic = 'force-dynamic';
import ProjectCard from '@/components/ProjectCard';
import ApiProjectCard from '@/components/ApiProjectCard';
import { apiProjects } from '@/data/apiProjects';
import type { Project } from '@/types';
import config from '@payload-config';
import { getPayload } from 'payload';

type ProjectType = 'application' | 'small-business-site' | 'localTool';

type RawProject = {
	id: string;
	title: string;
	slug: string;
	description: string;
	images?: { imageUrl: string; caption?: string }[];
	tech?: (string | { name?: string })[];
	githubLink?: string;
	liveLink?: string;
	projectType?: ProjectType;
};

export default async function ProjectsPage() {
	const payload = await getPayload({ config });

	const findResult = await payload.find({
		collection: 'projects',
		sort: '-createdAt',
	});

	const projects = findResult.docs as RawProject[];

	const projectList: Project[] = projects.map((project) => ({
		id: project.id,
		title: project.title,
		slug: project.slug,
		description: project.description,
		images: project.images?.map((image) => ({
			src: image.imageUrl,
			alt: image.caption || project.title,
		})),
		tech: (project.tech || []).map((tech) =>
			typeof tech === 'string' ? { name: tech } : { name: tech.name || '' },
		),
		githubLink: project.githubLink,
		liveLink: project.liveLink,
		projectType: project.projectType || 'application',
	}));

	const applications = projectList.filter(
		(project) => project.projectType === 'application',
	);

	return (
		<main className='min-h-screen px-6 py-20 sm:px-10 bg-base-200 text-base-content'>
			<div className='max-w-5xl mx-auto space-y-16'>
				<header className='text-center'>
					<h1 className='text-4xl font-bold mb-4 text-primary'>Projects</h1>
					<p className='text-base-content/80 max-w-2xl mx-auto'>
						A selection of backend and full-stack software projects built
						with Java, Spring Boot, Next.js and Node.js, demonstrating API
						design, business logic, testing, database integration and
						deployed application development.
					</p>
				</header>

				{/* API projects section */}
				<section aria-labelledby='api-projects-heading'>
					<div className='mb-10 grid gap-4 rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-8 md:p-8'>
						<h2
							id='api-projects-heading'
							className='text-3xl font-bold text-primary'>
							Java &amp; Spring Boot APIs
						</h2>
						<p className='text-base-content/80 leading-relaxed'>
							Focused backend projects demonstrating REST API design,
							business-rule modelling, layered architecture, validation,
							persistence and automated testing with Java and Spring Boot.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
						{apiProjects.map((project) => (
							<ApiProjectCard key={project.id} project={project} />
						))}
					</div>
				</section>
				{/* Applications section */}
				<section>
					<div className='mb-10 grid gap-4 rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-8 md:p-8'>
						<h2 className='text-3xl font-bold text-primary'>
							Full-Stack Applications
						</h2>
						<p className='text-base-content/80 leading-relaxed'>
							Larger application projects built with technologies including
							Next.js, TypeScript, Node.js and modern databases, covering
							authentication, data modelling, deployment and user-facing
							product development.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 auto-rows-fr'>
						{applications.map((project) => (
							<div key={project.id} className='h-full'>
								<ProjectCard
									images={project.images}
									title={project.title}
									slug={project.slug}
									description={project.description}
									tech={project.tech}
									githubLink={project.githubLink}
									liveLink={project.liveLink}
								/>
							</div>
						))}
					</div>
				</section>

				{/* Small business websites section
				<section>
					<div className='text-center mb-10'>
						<h2 className='text-3xl font-bold mb-4 text-primary'>
							Websites for Small Businesses
						</h2>
						<p className='text-base-content/80 max-w-2xl mx-auto'>
							Example layouts for trades and local services. These demos show
							the kind of fast, mobile-friendly websites I can deliver quickly
							for a small business.
						</p>
					</div>

					{smallBusinessSites.length > 0 ? (
						<div className='grid gap-8 md:grid-cols-2 auto-rows-fr'>
							{smallBusinessSites.map((project) => (
								<div key={project.id} className='h-full'>
									<ProjectCard
										images={project.images}
										title={project.title}
										slug={project.slug}
										description={project.description}
										tech={(project.tech || []).map((t) =>
											typeof t === 'string'
												? { name: t }
												: { name: (t as { name?: string }).name || '' }
										)}
										githubLink={project.githubLink}
										liveLink={project.liveLink}
									/>
								</div>
							))}
						</div>
					) : (
						<div className='max-w-xl mx-auto'>
							<div className='card bg-base-100 shadow-md p-6 rounded-lg'>
								<h3 className='text-xl font-semibold mb-2'>
									Small business examples coming soon
								</h3>
								<p className='text-sm text-base-content/80'>
									I&apos;m currently building example websites for trades and
									local services (e.g. plumbers, electricians, landscapers).
									These will appear here shortly to show what I can deliver for
									a small business.
								</p>
							</div>
						</div>
					)}
				</section> */}
			</div>
		</main>
	);
}
