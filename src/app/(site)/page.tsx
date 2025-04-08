import type { Metadata } from 'next';
import '../globals.css';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
	title: 'My Portfolio',
	description: 'Portfolio website showcasing projects and skills',
};

export default function Home() {
	return (
		<div className='min-h-screen p-8 sm:p-20'>
			<Hero />
			{/* Hero, About, Projects, Contact sections will go here */}
		</div>
	);
}
