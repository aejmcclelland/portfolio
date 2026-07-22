'use client';
import { profile } from '@/data/profile';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='relative max-w-5xl w-full mx-auto bg-base-100 px-6 sm:px-10 py-10 sm:py-14 rounded-lg shadow-[4px_4px_10px_2px_rgba(0,0,0,0.20)]'>
			<div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8'>
				{/* Text column */}
				<div className='flex-1 flex flex-col'>
					<p className='text-xl sm:text-2xl font-semibold text-warning mb-3'>
						Hi, I&apos;m Andrew
					</p>

					<h2 className='text-lg sm:text-xl font-semibold text-base-content mb-5'>
						{profile.title}
					</h2>

					<p className='text-sm sm:text-base text-base-content/90 leading-relaxed mb-5'>
						{profile.intro}
					</p>

					<p className='text-sm sm:text-base text-base-content/90 leading-relaxed'>
						{profile.outro}
					</p>

					<div className='mt-6'>
						<Link
							href='/projects'
							aria-label='Explore some of my projects'
							className='inline-flex items-center gap-2 text-sm sm:text-base font-medium text-base-content hover:text-warning transition-colors duration-300'>
							<span>Explore some of my projects</span>
							<span aria-hidden='true'>&rarr;</span>
						</Link>
					</div>
				</div>

				{/* Avatar column */}
				<div className='shrink-0'>
					<Image
						src='/image-avatar.png'
						alt='Andrew McClelland'
						width={140}
						height={140}
						priority
						className='rounded-full shadow-md border md:w-40 md:h-40'
					/>
				</div>
			</div>
		</section>
	);
}
