'use client';

import { useEffect, useState } from 'react';
import { CiLight, CiDark } from 'react-icons/ci';

export default function LightDarkToggle() {
	const [theme, setTheme] = useState<'nord' | 'dim'>('nord');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); // Prevent hydration mismatch

		const stored = localStorage.getItem('theme');
		if (stored === 'nord' || stored === 'dim') {
			setTheme(stored);
			document.documentElement.setAttribute('data-theme', stored);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			const initial = prefersDark ? 'dim' : 'nord';
			setTheme(initial);
			document.documentElement.setAttribute('data-theme', initial);
			localStorage.setItem('theme', initial);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'nord' ? 'dim' : 'nord';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	};

	if (!mounted) return null; // Avoid mismatched render

	return (
		<button
			onClick={toggleTheme}
			className='btn btn-sm btn-ghost text-success text-2xl flex items-center justify-center p-4'
			aria-label='Toggle Light/Dark Mode'>
			{theme === 'nord' ? (
				<CiDark className='w-6 h-6' />
			) : (
				<CiLight className='w-6 h-6' />
			)}
		</button>
	);
}
