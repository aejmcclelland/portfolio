import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<>
			{children}
			<Analytics />
		</>
	);
}
