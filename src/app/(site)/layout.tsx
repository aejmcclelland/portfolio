import type { Metadata } from 'next';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Space_Grotesk } from 'next/font/google';
import ToastProvider from '@/components/ToastProvider';
import Script from 'next/script';
import '@/styles/globals.css';

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
			<body className='font-grotesk flex flex-col bg-base-200 min-h-screen'>
				<Nav />
				<main className='grow'>{children}</main>
				<Footer />
				<ToastProvider />
			</body>
		</html>
	);
}
