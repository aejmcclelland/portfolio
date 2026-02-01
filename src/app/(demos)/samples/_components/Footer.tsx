'use client';

export default function Footer() {
	return (
		<footer className='footer sm:footer-horizontal bg-primary text-neutral-content items-center p-4 mt-auto'>
			<div className='w-full flex justify-between items-center flex-wrap sm:flex-nowrap'>
				<aside className='grid-flow-col items-center'>
					<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
				</aside>
				<nav className='flex gap-6 pr-6 md:place-self-center md:justify-self-end'></nav>
			</div>
		</footer>
	);
}
