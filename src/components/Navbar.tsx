'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<nav className='site-navbar bg-base-300 sticky top-0 z-50 w-full'>
			<div className='navbar max-w-7xl mx-auto px-4'>
				{/* Site Name */}
				<div className='flex-1'>
					<Link href='/' className='btn btn-ghost text-xl font-grotesk'>
						Andrew McClelland
					</Link>
				</div>

				{/* Desktop Nav */}
				<div className='hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link
								href='/about'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/projects'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Mobile Toggle */}
				<div className='lg:hidden'>
					<button
						className='btn btn-ghost'
						onClick={() => setIsOpen(!isOpen)}
						aria-label='Toggle menu'
						aria-expanded={isOpen}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Dropdown */}
			{hasMounted && isOpen && (
				<div className='absolute top-[64px] left-0 w-full bg-base-200 shadow-md z-40 lg:hidden'>
					<ul className='menu menu-vertical w-full p-4'>
						<li>
							<Link
								href='/about'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/projects'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								onClick={() => setIsOpen(false)}
								className='text-lg font-semibold hover:text-primary transition-colors duration-200'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
