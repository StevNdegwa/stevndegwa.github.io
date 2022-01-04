export type ElementThemeStyleType = {
    bg?: string;
    color?: string;
    hover?: string;
}

export type ThemeConfigType = Record<string, ElementThemeStyleType>;

export type ThemeMode = "DARK" | "LIGHT";