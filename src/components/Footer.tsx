'use client';

export default function Footer() {
	return (
		<footer className='footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 mt-auto'>
			<aside className='grid-flow-col items-center'>
				<span className='text-lg font-bold tracking-wide -rotate-45 inline-block'>
					AM
				</span>
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</aside>
			<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
				<a
					href='https://github.com/aejmcclelland'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						className='fill-current'>
						<path d='M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.69-3.88-1.38-3.88-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.58-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.14 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0C17.88 5.2 18.85 5.5 18.85 5.5c.63 1.64.23 2.84.11 3.14.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z' />
					</svg>
				</a>

				<a
					href='https://linkedin.com/in/aejmcclelland'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						className='fill-current'>
						<path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24V7h4V24h-4zM8.5 7h3.7v2.5h.1c.5-.9 1.6-2 3.4-2 3.6 0 4.3 2.4 4.3 5.4V24h-4v-8.1c0-1.9-.1-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24h-4V7z' />
					</svg>
				</a>
			</nav>
		</footer>
	);
}
