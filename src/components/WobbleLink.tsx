'use client';

import Link from "next/link";

interface WobbleLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    ariaLabel?: string;
}

export default function WobbleLink({
    href,
    children,
    className = "",
    onClick,
    ariaLabel,
}: WobbleLinkProps) {
    return (
			<Link
				href={href}
				className={`inline-block wobble-hover transition-transform ${className}`}
				onClick={onClick}
				aria-label={ariaLabel}>
				{children}
			</Link>
		);
}