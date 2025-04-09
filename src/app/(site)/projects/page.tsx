import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
	return (
		<section className='min-h-screen px-6 py-20 sm:px-10 bg-base-100'>
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-6'>Projects</h2>
				<p className='mb-12 text-base-content/80'>
					A few selected projects that showcase my full-stack skills in building
					clean, scalable, and modern web applications.
				</p>

				<div className='grid gap-8 md:grid-cols-2'>
					<ProjectCard
						title="Rebekah's Recipe App"
						slug='rebekahs-recipes'
						description='A custom family recipe manager with full CRUD functionality, user authentication, Cloudinary image uploads, and responsive MUI design.'
						tech={['Next.js', 'MongoDB Atlas', 'Tailwind CSS', 'Cloudinary']}
						github='https://github.com/aejmcclelland/recipe-app'
					/>
					<ProjectCard
						title='Church Website for Regent Street Presbyterian'
						slug='regent-street-church'
						description='A modern, responsive church site built using Next.js 15, Tailwind CSS, Payload CMS, and MongoDB. Designed for ease of content updates by non-technical users.'
						tech={['Next.js', 'Payload CMS', 'Tailwind CSS', 'MongoDB']}
						github='https://github.com/aejmcclelland/church-site'
					/>
				</div>
			</div>
		</section>
	);
}
