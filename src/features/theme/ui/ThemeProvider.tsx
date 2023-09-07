import { FC, useMemo, useState, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/theme.constants";
import { Theme } from "../types/theme.types";
import { ThemeContext } from "../context/theme.context";

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
