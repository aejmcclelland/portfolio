'use client';
import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';

export default function Hero() {
	return (
		<section className='relative max-w-5xl w-full mx-auto bg-base-100 px-6 sm:px-10 py-10 sm:py-14 rounded-lg shadow-[4px_4px_10px_2px_rgba(0,0,0,0.20)]'>
			<div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8'>
				{/* Text column */}
				<div className='flex-1 flex flex-col'>
					<p className='text-lg sm:text-lg font-medium tracking-wide text-base-content/70 mb-1'>
						Hi, I&apos;m Andrew
					</p>

					<h2 className='text-lg sm:text-xl font-semibold text-base-content mb-4'>
						{profile.title}
					</h2>

					<p className='text-sm sm:text-base text-base-content leading-relaxed mb-4'>
						{profile.intro}
					</p>

					<p className='text-sm sm:text-base text-base-content leading-relaxed'>
						{profile.outro}
					</p>
				</div>

				{/* Avatar column */}
				<div className='shrink-0'>
					<Image
						src='/image-avatar.png'
						alt='Andrew McClelland'
						width={140}
						height={140}
						priority
						className='rounded-full shadow-md border  md:w-40 md:h-40'
					/>
				</div>
			</div>
		</section>
	);
}
