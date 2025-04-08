'use client';

export default function Hero() {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center items-center text-center px-6'>
			<h1 className='text-4xl sm:text-5xl font-bold text-primary'>
				Andrew McClelland
			</h1>
			<h2 className='text-xl sm:text-2xl text-base-content mt-2'>
				Full-Stack Developer & Tech Enthusiast
			</h2>
			<p className='max-w-xl text-base-content mt-4 text-sm sm:text-base'>
				I build clean and scalable web apps using modern tools like Next.js,
				MongoDB, and Tailwind CSS. Passionate about learning and turning ideas
				into reality.
			</p>
			<div className='mt-6'>
				<a href='#projects' className='btn btn-primary'>
					View Projects
				</a>
			</div>
		</section>
	);
}
