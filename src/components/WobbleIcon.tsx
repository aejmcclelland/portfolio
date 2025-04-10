'use client';

import { ReactNode } from 'react';

interface WobbleIconProps {
	children: ReactNode;
	className?: string;
}

export default function WobbleIcon({
	children,
	className = '',
}: WobbleIconProps) {
	return (
		<span
			className={`inline-block wobble-hover transition-transform ${className}`}>
			{children}
		</span>
	);
}
