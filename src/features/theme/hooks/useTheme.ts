import { useContext } from "react";
import { Theme, ThemeContextProps } from "../types/theme.types";
import { ThemeContext } from "../context/theme.context";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/theme.constants";

interface UseThemeResult {
    theme?: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext<ThemeContextProps>(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        if (setTheme) {
            setTheme(newTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}
