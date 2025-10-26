'use client';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center items-center text-center px-6'>
			<h1 className='text-4xl sm:text-5xl font-bold text-primary'>
				Andrew McClelland
			</h1>
			<h2 className='text-xl sm:text-2xl text-base-content mt-2'>
				Full&#8209;Stack Developer | Front&#8209;End & Back&#8209;End Enthusiast
			</h2>
			<p className='max-w-xl text-base-content mt-4 text-sm sm:text-base'>
				I build reliable and efficient web applications using modern tools like
				Next.js, MongoDB, and Tailwind CSS. Passionate about backend development
				and eager to grow my skills in a junior or graduate role.
			</p>

			<div className='mt-6'>
				<Link href='/projects' className='btn btn-primary hover:text-warning'>
					View Projects
				</Link>
			</div>
		</section>
	);
}
