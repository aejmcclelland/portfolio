'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFolderOpen } from 'react-icons/fa';
import WobbleIcon from './WobbleIcon';

export default function Hero() {
	return (
		<section className='relative max-w-5xl w-full mx-auto bg-base-100 px-6 sm:px-10 py-10 sm:py-14 rounded-lg shadow-[4px_4px_10px_2px_rgba(0,0,0,0.20)]'>
			<div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8'>
				{/* Text column */}
				<div className='flex-1 flex flex-col'>
					<p className='text-xs sm:text-sm font-medium tracking-wide text-base-content/70 mb-1'>
						Hello, I&apos;m Andrew
					</p>
					<h2 className='text-lg sm:text-xl font-semibold text-base-content mb-4'>
						Web Developer &amp; Software Engineer
					</h2>

					<p className='text-sm sm:text-base text-base-content leading-relaxed mb-3'>
						I build fast, reliable web applications — from secure logins and APIs to clean, mobile-friendly UIs. I enjoy the backend as much as the frontend: designing data models, connecting authentication, and shipping features with a strong focus on security and maintainability.
					</p>

					<p className='text-sm sm:text-base text-base-content leading-relaxed mb-3'>
						Open to full-time roles and freelance (Belfast / remote).
					</p>

					{/* <p className='text-sm sm:text-base text-base-content leading-relaxed'>
						I&apos;m currently open to both full-time roles and freelance work —
						whether that&apos;s helping a team ship features faster or building
						a focused web app or small business site from scratch.
					</p> */}

					<div className='mt-6 flex gap-4'>
						<Link href='/projects' aria-label='View projects'>
							<WobbleIcon>
								<FaFolderOpen className='w-10 h-10 text-base-content hover:text-warning transition-colors duration-300' />
							</WobbleIcon>
						</Link>
					</div>
				</div>

				{/* Avatar column */}
				<div className='shrink-0'>
					<Image
						src='/profile-avatar.png'
						alt='Andrew McClelland'
						width={140}
						height={140}
						className='rounded-full shadow-md border border-base-content md:w-40 md:h-40'
					/>
				</div>
			</div>
		</section>
	);
}
