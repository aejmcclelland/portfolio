import type { Metadata } from 'next';
import { Navbar } from '@/app/(demos)/samples/_components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Website Samples | Andrew McClelland',
	description: 'Client-ready one-page website templates and demos.',
};

export default function SamplesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='min-h-screen flex flex-col bg-base-200'>
			<Navbar brand='Samples' />
			<main className='grow'>{children}</main>
			<Footer />
		</section>
	);
}
