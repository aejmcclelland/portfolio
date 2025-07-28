'use client';

import { useEffect, useState } from 'react';
import { CiLight, CiDark } from 'react-icons/ci';

export default function LightDarkToggle() {
	const [theme, setTheme] = useState<'corporate' | 'dim' | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem('theme') as 'corporate' | 'dim' | null;

		if (stored === 'corporate' || stored === 'dim') {
			setTheme(stored);
			document.documentElement.setAttribute('data-theme', stored);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			const initialTheme = prefersDark ? 'dim' : 'corporate';
			setTheme(initialTheme);
			document.documentElement.setAttribute('data-theme', initialTheme);
			localStorage.setItem('theme', initialTheme);
		}
	}, []);

	const toggleTheme = () => {
		if (!theme) return;
		const newTheme = theme === 'corporate' ? 'dim' : 'corporate';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	};

	if (!theme) return null;

	return (
		<button
			onClick={toggleTheme}
			className='group btn btn-sm btn-ghost btn-primary text-2xl flex items-center justify-center p-4'
			aria-label='Toggle Light/Dark Mode'>
			{theme === 'corporate' ? (
				<CiDark className='w-6 h-6 text-neutral group-hover:text-warning' />
			) : (
				<CiLight className='w-6 h-6 text-neutral group-hover:text-secondary' />
			)}
		</button>
	);
}
