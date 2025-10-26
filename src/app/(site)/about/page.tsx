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
						I'm a driven full-stack developer passionate about designing and
						building efficient, scalable web applications. I enjoy working
						across the stack — from crafting clean, responsive UIs with{' '}
						<strong>Next.js</strong> and Tailwind CSS, to developing robust
						backend systems and APIs using
						<strong> Node.js</strong>, <strong>Express</strong>, and
						<strong> MongoDB</strong>.
					</p>
					<p className='mt-4 text-base'>
						I'm continually learning and expanding my skills in modern
						development practices, cloud deployment, and data handling. With a
						strong foundation in software design and real-world project
						experience, I'm ready to contribute as a junior or graduate
						developer — whether front-end, back-end, or full-stack.
					</p>
				</div>
			</div>
		</section>
	);
}
