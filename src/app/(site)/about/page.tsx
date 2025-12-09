'use client';
import Image from 'next/image';

export default function About() {
	return (
		<section id='about' className='py-12 px-6 sm:px-20'>
			<div className='max-w-3xl mx-auto flex flex-col items-center text-justify'>
				{/* Avatar */}
				<Image
					src='/profile-avatar.png'
					alt='Andrew McClelland'
					width={140}
					height={140}
					className='rounded-full shadow-md border border-base-content mb-6'
				/>

				{/* Heading */}
				<h2 className='text-2xl text-primary font-bold mb-4'>About Me</h2>

				{/* Contained Text Card */}
				<div className='bg-base-300 text-base-content rounded-xl shadow-lg p-6 w-full max-w-2xl'>
					<p className='text-base leading-relaxed'>
						I&apos;m Andrew, a full-stack web developer with a background in Software Development from Queen&apos;s University Belfast. I focus on building reliable, maintainable web applications with modern tools like Next.js, Node, Supabase, and MongoDB.
					</p>

					<p className='text-base leading-relaxed mt-4'>
						I enjoy the backend just as much as the UI — wiring up clean APIs, data models, and authentication, then putting a fast, responsive interface on top. Recent work includes a production-ready recipe platform, a task management app.
					</p>

					<p className='text-base leading-relaxed mt-4'>
						I&apos;m currently open to both full-time roles and freelance work — whether that&apos;s helping a team ship features faster, or building a focused web app or small business site from scratch.
					</p>
				</div>
			</div>
		</section>
	);
}
