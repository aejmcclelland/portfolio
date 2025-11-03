'use client';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center items-center text-center px-6'>
			<h1 className='text-4xl sm:text-5xl font-bold text-primary'>
				Andrew McClelland
			</h1>
			<h2 className='text-xl sm:text-2xl text-base-content mt-2'>
				Full&#8209;Stack Developer
			</h2>
			<p className='max-w-xl text-base-content mt-4 text-sm sm:text-base'>
				I build full‑stack web apps with <strong>Next.js</strong> on the front and <strong>Node.js</strong>/<strong>Express</strong> on the back, with <strong>MongoDB</strong> for data and <strong>Tailwind CSS</strong> for styling. Want to see more? Browse my code on GitHub or get in touch to connect on LinkedIn.
			</p>

			<div className='mt-6 flex flex-wrap justify-center gap-3'>
				<Link href='/projects' className='btn btn-primary hover:text-warning'>
					View Projects
				</Link>
				<Link
					href='https://github.com/aejmcclelland'
					target='_blank'
					rel='noopener noreferrer'
					className='btn btn-outline'
				>
					GitHub
				</Link>
				<Link href='/contact' className='btn btn-ghost'>
					Connect on LinkedIn
				</Link>
			</div>
		</section>
	);
}
