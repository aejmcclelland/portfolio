import type { Metadata } from 'next';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';
import { Space_Grotesk } from 'next/font/google';

const grotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-grotesk',
});

export const metadata: Metadata = {
	title: 'My Portfolio',
	description: 'Portfolio website showcasing projects and skills',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${grotesk.variable}`}>
			<body className='font-nunito flex flex-col min-h-screen'>
				<Nav />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
