import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";

import lenis from "../components/animations/lenis";
import UserBrief from "./UserBrief";

export default function Main() {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [isDarkMode, setIsDarkMode] = useState(selectedTheme === "dark");

  useEffect(() => {
    document.body.classList.toggle(styles.darkMode, isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("selectedTheme", newDarkModeState ? "dark" : "light");
    document.body.classList.toggle(styles.darkMode, newDarkModeState);
  };

  useEffect(() => {
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Grid container>
        {/* navbar */}
        <Grid item xs={12}>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Grid>
        {/* navbar */}
        {/* user brief section */}
        <Grid xs={12}>
          <UserBrief />
        </Grid>
        {/* user brief section */}
      </Grid>
    </div>
  );
}
