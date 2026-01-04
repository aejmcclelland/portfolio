// src/config/theme.ts
export const LIGHT_THEME = 'light' as const;
export const DARK_THEME = 'dark' as const;

export const THEMES = [LIGHT_THEME, DARK_THEME] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = 'theme';
