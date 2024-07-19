import React, { useEffect, useState } from 'react';
import styles from "../darkMode/DarkMode.module.css";
import lightModeIcon from "../../assets/images/navbar-icons/light mode.png";
import darkModeIcon from "../../assets/images/navbar-icons/dark mode.png";

export default function DarkMode({ navbarMode }) {
    const selectedTheme = localStorage.getItem("selectedTheme");
    const [isDarkMode, setIsDarkMode] = useState(selectedTheme === "dark");

    const toggleDarkMode = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        localStorage.setItem("selectedTheme", newDarkModeState ? "dark" : "light");
        navbarMode(newDarkModeState);
        document.body.classList.toggle(styles.darkMode, newDarkModeState);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add(styles.darkMode);
        } else {
            document.body.classList.remove(styles.darkMode);
        }
    }, [isDarkMode]);

    return (
        <div>
            <img
                onClick={toggleDarkMode}
                src={isDarkMode ? lightModeIcon : darkModeIcon}
                width={18}
                height={18}
                className={styles.modeImg}
                alt="Toggle Dark Mode"
            />
        </div>
    );
}
