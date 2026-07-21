'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className='relative max-w-5xl w-full mx-auto bg-base-100 px-6 sm:px-10 py-10 sm:py-14 rounded-lg shadow-[4px_4px_10px_2px_rgba(0,0,0,0.20)]'>
			<div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8'>
				{/* Text column */}
				<div className='flex-1 flex flex-col'>
					<p className='text-lg sm:text-lg font-medium tracking-wide text-base-content/70 mb-1'>
						Hi, I&apos;m Andrew
					</p>
			<h2 className='text-md sm:text-lg font-semibold text-base-content mb-4'>
  I enjoy building reliable software with Java, Spring Boot, Next.js and Node.js.
</h2>

<p className='text-sm sm:text-base text-base-content leading-relaxed mb-3'>
  I’m an MSc Software Development graduate who enjoys turning ideas into well-designed, reliable software. Recently I’ve been focusing on building backend applications with Java and Spring Boot, designing REST APIs and services that are straightforward to understand, test and maintain. Alongside this, I’ve built and deployed full-stack applications using Next.js, React and Node.js, giving me experience across the entire development lifecycle—from database design and authentication through to deployment.

I’m currently looking for a graduate or junior software engineering role where I can contribute to real products, learn from experienced engineers and continue growing as a developer.
</p>

					<div className='mt-6'>
						<Link
							href='/projects'
							aria-label='Explore some of my projects'
							className='inline-flex items-center text-sm sm:text-base font-medium text-base-content hover:text-warning transition-colors duration-300'>
							Explore some of my projects
							{/* Arrow icon with spacing */}
							<span className='ml-2' aria-hidden='true'>
								&rarr;
							</span>
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
						className='rounded-full shadow-md border  md:w-40 md:h-40'
					/>
				</div>
			</div>
		</section>
	);
}
