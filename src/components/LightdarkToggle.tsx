'use client';

import { useEffect, useState } from 'react';
import { CiLight, CiDark } from 'react-icons/ci';
import {
	LIGHT_THEME,
	DARK_THEME,
	THEME_STORAGE_KEY,
	Theme,
} from '@/config/theme';

export default function LightDarkToggle() {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

		if (stored === LIGHT_THEME || stored === DARK_THEME) {
			setTheme(stored);
			document.documentElement.setAttribute('data-theme', stored);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			const initialTheme = prefersDark ? DARK_THEME : LIGHT_THEME;
			setTheme(initialTheme);
			document.documentElement.setAttribute('data-theme', initialTheme);
			localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
		}
	}, []);

	const toggleTheme = () => {
		if (!theme) return;
		const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem(THEME_STORAGE_KEY, newTheme);
	};

	if (!theme) return null;

	return (
		<button
			onClick={toggleTheme}
			className='group btn btn-sm btn-ghost btn-primary text-2xl flex items-center justify-center p-4'
			aria-label='Toggle Light/Dark Mode'>
			{theme === LIGHT_THEME ? (
				<CiDark className='w-6 h-6 text-neutral group-hover:text-warning' />
			) : (
				<CiLight className='w-6 h-6 text-neutral group-hover:text-secondary' />
			)}
		</button>
	);
}
