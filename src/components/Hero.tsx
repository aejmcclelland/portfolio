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
				Web Developer & Software Engineer
			</h2>
			<p className='max-w-xl text-justify text-base-content mt-4 text-sm sm:text-base'>
				I design and build fast, reliable websites and web applications that do
				exactly what they’re meant to do. My work ranges from full-stack
				applications with secure logins and data handling, to clean,
				mobile-friendly websites for small businesses. I focus on building
				things properly — practical, maintainable, and ready for real-world use.
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
