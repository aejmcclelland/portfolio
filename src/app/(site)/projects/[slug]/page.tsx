import { notFound } from 'next/navigation';

const projectData = [
	{
		slug: 'rebekahs-recipes',
		title: "Rebekah's Recipes",
		description:
			'A custom family recipe manager with full CRUD functionality, user authentication, and responsive MUI design.',
		features: [
			'Full CRUD functionality for recipes and ingredients',
			'User authentication and protected routes',
			'Cloudinary image uploads and image previews',
			'Responsive design using Tailwind and MUI',
		],
	},
	{
		slug: 'regent-street-church',
		title: 'Regent Street Church Website',
		description:
			'A modern, content-managed church website built with Next.js 15, Payload CMS, and MongoDB. Designed to allow non-technical users to easily update weekly service details, events, and ministry content.',
		features: [
			'Fully content-managed via Payload CMS collections and rich text editors',
			'Image uploads and optimized delivery using Cloudinary',
			'Mobile-first responsive design using Tailwind and DaisyUI',
			'Secure authentication and role-based access for admin users',
		],
	},
	// You can add more projects here
];

export default function ProjectDetail({
	params,
}: {
	params: { slug: string };
}) {
	const project = projectData.find((p) => p.slug === params.slug);

	if (!project) return notFound();

	return (
		<div className='min-h-screen max-w-4xl mx-auto px-4 py-16 bg-base-100'>
			<h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
			<p className='mb-6 text-base-content/80'>{project.description}</p>
			<h2 className='text-xl font-semibold mb-2'>Key Features</h2>
			<ul className='list-disc pl-6 space-y-1 text-base'>
				{project.features.map((feature, idx) => (
					<li key={idx}>{feature}</li>
				))}
			</ul>
		</div>
	);
}
