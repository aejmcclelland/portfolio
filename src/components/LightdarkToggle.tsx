'use client';

import { useEffect, useState } from 'react';
import { CiLight, CiDark } from 'react-icons/ci';

export default function LightDarkToggle() {
	const [theme, setTheme] = useState<'nord' | 'dim'>('nord');

	useEffect(() => {
		// Check saved theme or system preference
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		const initial: 'nord' | 'dim' =
			stored === 'nord' || stored === 'dim'
				? stored
				: prefersDark
				? 'dim'
				: 'nord';
		setTheme(initial);
		document.documentElement.setAttribute('data-theme', initial);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'nord' ? 'dim' : 'nord';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			className='btn btn-sm btn-ghost text-success text-2xl'
			aria-label='Toggle Light/Dark Mode'>
			{theme === 'nord' ? <CiDark /> : <CiLight />}
		</button>
	);
}
