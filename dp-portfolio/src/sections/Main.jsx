import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";

import lenis from "../components/animations/lenis";
import UserBrief from "./UserBrief";
import SomethingAboutMe from "./SomethingAboutMe";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle(styles.darkMode, isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = (newDarkModeState) => {
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
        <Grid item xs={12} mt={5}>
          <UserBrief isDarkMode={isDarkMode} />
        </Grid>
        {/* user brief section */}
        {/* something about me */}
        <Grid item xs={12} mt={5}>
          <SomethingAboutMe isDarkMode={isDarkMode} />
        </Grid>
        {/* something about me */}
      </Grid>
    </div>
  );
}
