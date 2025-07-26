import type { Metadata } from 'next';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
import ToastProvider from '@/components/ToastProvider';
import Script from 'next/script';

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
		<html lang='en' className={`${grotesk.variable}`} suppressHydrationWarning>
			<head>
				<meta
					name='format-detection'
					content='telephone=no, date=no, email=no, address=no'
				/>
				<Script
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
					strategy='afterInteractive'
				/>
			</head>
			<body className='font-grotesk flex flex-col min-h-screen'>
				<Nav />
				<main className='flex-grow'>{children}</main>
				<Footer />
				<ToastProvider />
			</body>
		</html>
	);
}
