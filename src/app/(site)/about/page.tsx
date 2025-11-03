'use client';
import Image from 'next/image';

export default function About() {
	return (
		<section id='about' className='py-12 px-6 sm:px-20 bg-base-100'>
			<div className='max-w-3xl mx-auto flex flex-col items-center text-justify'>
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
				<div className=' text-sprimary rounded-xl shadow-lg p-6 w-full max-w-2xl'>
					<p className='text-lg'>
						I’m Andrew — a Software Development graduate from Queen’s University
						Belfast with a focus on building reliable full-stack web
						applications. I particularly enjoy backend development — there’s
						something oddly satisfying about getting a perfect{' '}
						<code>200 OK</code>. This portfolio reflects my journey so far and
						the projects that have helped me grow as a developer.
					</p>
				</div>
			</div>
		</section>
	);
}
