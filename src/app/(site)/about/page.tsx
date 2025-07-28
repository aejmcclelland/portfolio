'use client';
import Image from 'next/image';

export default function About() {
	return (
		<section id='about' className='py-12 px-6 sm:px-20 bg-base-100'>
			<div className='max-w-3xl mx-auto flex flex-col items-center text-center'>
				{/* Avatar */}
				<Image
					src='/profile-avatar.png'
					alt='Andrew McClelland'
					width={160}
					height={160}
					className='rounded-full shadow-md border border-base-content mb-6'
				/>

				{/* Heading */}
				<h2 className='text-3xl text-primary font-bold mb-6'>About Me</h2>

				{/* Contained Text Card */}
				<div className='bg-secondary text-secondary-content rounded-xl shadow-lg p-6 w-full max-w-2xl'>
					<p className='text-lg'>
						I&apos;m a passionate software developer focused on building
						efficient, scalable applications using modern tools like Next.js and
						MongoDB. I love solving complex problems, learning new technologies,
						and writing clean, maintainable code.
					</p>
					<p className='mt-4 text-base'>
						Whether it&apos;s crafting APIs, working with data, or building
						interactive UIs, I enjoy every part of the development process.
					</p>
				</div>
			</div>
		</section>
	);
}
