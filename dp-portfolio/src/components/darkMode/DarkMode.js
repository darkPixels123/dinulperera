import React, { useEffect, useState } from 'react';
import styles from '../darkMode/DarkMode.module.css';
import lightModeIcon from '../../assets/images/navbar-icons/light mode.png';
import darkModeIcon from '../../assets/images/navbar-icons/dark mode.png';

export default function DarkMode({ toggleDarkMode }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('selectedTheme') === 'dark');

    const updateBodyBackgroundColor = (isDarkMode) => {
        const root = document.documentElement;
        root.style.setProperty('--body-background-color', isDarkMode ? 'var(--body-background-color-dark)' : 'var(--body-background-color-light)');
    };

    const handleToggleDarkMode = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        localStorage.setItem('selectedTheme', newDarkModeState ? 'dark' : 'light');
        document.body.classList.toggle(styles.darkMode, newDarkModeState);
        updateBodyBackgroundColor(newDarkModeState);
        toggleDarkMode(newDarkModeState);
    };

    useEffect(() => {
        document.body.classList.toggle(styles.darkMode, isDarkMode);
        updateBodyBackgroundColor(isDarkMode);
    }, [isDarkMode]);

    return (
        <div>
            <img
                onClick={handleToggleDarkMode}
                src={isDarkMode ? lightModeIcon : darkModeIcon}
                width={18}
                height={18}
                className={styles.modeImg}
                alt="Toggle Dark Mode"
            />
        </div>
    );
}
