'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import styles from './style.module.scss';

interface HeaderComponentProps {
    children: React.ReactNode;
}

export default function HeaderComponent({ children }: HeaderComponentProps) {
    const { toggleTheme, getThemeIcon, getThemeText } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const childrenArray = React.Children.toArray(children);
    const logo = childrenArray[0];
    const burger = childrenArray[1];

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    {logo}
                </div>

                <div className={styles.header__actions}>
                    <button
                        className={styles['theme-toggle']}
                        onClick={toggleTheme}
                        aria-label="Переключить тему"
                    >
                        <span className={styles['theme-icon']}>
                            {mounted ? getThemeIcon() : '🌙'}
                        </span>
                        <span className={styles['theme-text']}>
                            {mounted ? getThemeText() : 'Тёмная'}
                        </span>
                    </button>

                    <div className={styles.header__burger}>
                        {burger}
                    </div>
                </div>
            </div>
        </header>
    );
}
