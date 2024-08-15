import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";

import useLenis from "../components/smoothScroll/useLenis";
import UserBrief from "./UserBrief";
import SomethingAboutMe from "./SomethingAboutMe";

export default function Main() {
  useLenis();

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

  return (
    <div className={styles.mainContainer}>
      <Grid container>
        {/* navbar */}
        <Grid item xs={12}>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Grid>
        {/* navbar */}
        {/* user brief section */}
        <Grid item xs={12} mt={10}>
          <section id="section1">
            <UserBrief isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* user brief section */}
        {/* something about me */}
        <Grid item xs={12}>
          <section id="section2">
            <SomethingAboutMe isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* something about me */}
      </Grid>
    </div>
  );
}
