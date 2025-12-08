'use client';
import WobbleIcon from './WobbleIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='footer sm:footer-horizontal bg-primary text-neutral-content items-center p-4 mt-auto'>
			<div className='w-full flex justify-between items-center flex-wrap sm:flex-nowrap'>
				<aside className='grid-flow-col items-center'>
					<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
				</aside>
				<nav className='flex gap-6 pr-6 md:place-self-center md:justify-self-end'>
					<WobbleIcon>
						<>
							<a
								href='https://github.com/aejmcclelland'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub'>
								<FaGithub className='w-9 h-9 text-neutral-content hover:text-warning' />
							</a>
						</>
					</WobbleIcon>

					<WobbleIcon>
						<>
							<a
								href='https://linkedin.com/in/aejmcclelland'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'>
								<FaLinkedin className='w-9 h-9 text-neutral-content hover:text-warning' />
							</a>
						</>
					</WobbleIcon>
				</nav>
			</div>
		</footer>
	);
}
