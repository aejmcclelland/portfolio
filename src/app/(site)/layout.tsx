import type { Metadata } from 'next';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
	title: 'My Portfolio',
	description: 'Portfolio website showcasing projects and skills',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='flex flex-col min-h-screen'>
				<Nav />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
