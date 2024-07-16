import React, { useState } from 'react'
import styles from "../darkMode/DarkMode.module.css";
import lightMode from "../../assets/images/navbar-icons/light mode.png";
import darkMode from "../../assets/images/navbar-icons/dark mode.png";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {

    }

    return (
        <div>
            <img
                onClick={toggleDarkMode}
                src={lightMode}
                width={23}
                height={23}
                className={styles.modeImg}
            />
        </div>
    )
}
