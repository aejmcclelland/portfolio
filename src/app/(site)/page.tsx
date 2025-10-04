import type { Metadata } from 'next';
declare module '*.css';
import '@/styles/globals.css';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
	title: 'My Portfolio',
	description: 'Portfolio website showcasing projects and skills',
};

export default function Home() {
	return (
		<div className=' p-8 sm:p-20 bg-base-200 text-base-content'>
			<Hero />
			{/* Hero, About, Projects, Contact sections will go here */}
		</div>
	);
}
