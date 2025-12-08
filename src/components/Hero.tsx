'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFolderOpen } from 'react-icons/fa';
import WobbleIcon from './WobbleIcon';

export default function Hero() {
	return (
		<section className='min-h-[40vh] flex flex-col justify-center items-center bg-base-100 text-center px-12 py-20 rounded-lg shadow-md'>
			<h1 className='text-4xl sm:text-5xl font-bold text-primary'>
				Andrew McClelland
			</h1>
			<h2 className='text-xl sm:text-2xl text-base-content mt-2'>
				Full&#8209;Stack Developer
			</h2>
			<p className='max-w-xl text-justify text-base-content mt-4 text-sm sm:text-base'>
				I build full‑stack web apps with <strong>Next.js</strong> and{' '}
				<strong>MongoDB</strong>. I also enjoy developing standalone backends
				with <strong>Node.js</strong>/<strong>Express</strong>, sometimes
				coupling them with <strong>React</strong> (Vite) and{' '}
				<strong>MongoDB</strong>. I work with <strong>Tailwind CSS</strong> for
				styling, and occasionally explore
				<strong> Java</strong> with <strong>Spring Boot</strong> to strengthen
				my backend skills. Want to see more? Browse my code on GitHub or connect
				with me on LinkedIn.
			</p>

			<div className='mt-6 flex justify-center gap-4'>
				<Link href='/projects' aria-label='Projects'>
					<WobbleIcon>
						<FaFolderOpen className='w-10 h-10 text-base-content hover:text-warning transition-colors duration-300' />
					</WobbleIcon>
				</Link>

				<Link
					href='https://github.com/aejmcclelland'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'>
					<WobbleIcon>
						<FaGithub className='w-10 h-10 text-base-content hover:text-secondary transition-colors duration-300' />
					</WobbleIcon>
				</Link>

				<Link
					href='https://www.linkedin.com/in/aejmcclelland/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'>
					<WobbleIcon>
						<FaLinkedin className='w-10 h-10 text-base-content hover:text-primary transition-colors duration-300' />
					</WobbleIcon>
				</Link>
			</div>
		</section>
	);
}
