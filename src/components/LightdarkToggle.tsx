'use client';

import { CiLight, CiDark } from 'react-icons/ci';
import { useLayoutEffect, useState } from 'react';
import {
	LIGHT_THEME,
	DARK_THEME,
	THEME_STORAGE_KEY,
	Theme,
} from '@/config/theme';

function isTheme(value: string | null): value is Theme {
	return value === LIGHT_THEME || value === DARK_THEME;
}

function getInitialTheme(): Theme {
	if (typeof window === 'undefined') {
		return LIGHT_THEME;
	}

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

	if (isTheme(storedTheme)) {
		return storedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? DARK_THEME
		: LIGHT_THEME;
}

export default function LightDarkToggle() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useLayoutEffect(() => {
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
		setTheme(newTheme);
	};

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
