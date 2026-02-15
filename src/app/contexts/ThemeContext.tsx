'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'dark' | 'light' | 'hacker';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    toggleTheme: () => void;
    getThemeIcon: () => string;
    getThemeText: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>('dark');
    const [mounted, setMounted] = useState(false);

    // Загрузка темы из localStorage только после монтирования на клиенте
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('global_theme') as ThemeType;
        if (savedTheme && ['dark', 'light', 'hacker'].includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    // Применение темы к корневому элементу
    useEffect(() => {
        if (!mounted) return;

        document.documentElement.removeAttribute('data-theme');
        document.documentElement.removeAttribute('data-hacker-theme');

        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (theme === 'hacker') {
            document.documentElement.setAttribute('data-hacker-theme', 'true');
        }

        localStorage.setItem('global_theme', theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prev => {
            if (prev === 'dark') return 'light';
            if (prev === 'light') return 'hacker';
            return 'dark';
        });
    };

    const getThemeIcon = () => {
        switch (theme) {
            case 'dark': return '🌙';
            case 'light': return '☀️';
            case 'hacker': return '👾';
        }
    };

    const getThemeText = () => {
        switch (theme) {
            case 'dark': return 'Тёмная';
            case 'light': return 'Светлая';
            case 'hacker': return 'Хакерская';
        }
    };

    // Пока не смонтировались на клиенте, рендерим с темой по умолчанию
    // но без индикации темы, чтобы избежать гидратации
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            toggleTheme,
            getThemeIcon,
            getThemeText
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
