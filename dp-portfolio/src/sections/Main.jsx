import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";
import UserBrief from "./UserBrief";
import SomethingAboutMe from "./SomethingAboutMe";
import lenis from "../components/animations/lenis";
import Loading from "./Loading";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  // Add more refs as needed for each section

  useEffect(() => {
    document.body.classList.toggle(styles.darkMode, isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = (newDarkModeState) => {
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("selectedTheme", newDarkModeState ? "dark" : "light");
    document.body.classList.toggle(styles.darkMode, newDarkModeState);
  };

  const handleScroll = (ref) => {
    if (ref.current) {
      lenis.scrollTo(ref.current, {
        offset: -80, // Adjust this value to account for any fixed headers
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Grid container>
        <div
          style={{
            position: "fixed",
            width: "100px",
            height: "100px",
            bottom: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        {/* navbar */}
        <Grid item xs={12}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            onNavigate={handleScroll}
            sectionRefs={{ section1Ref, section2Ref }}
          />
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
          <section id="section2" ref={section1Ref}>
            <SomethingAboutMe isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* something about me */}
      </Grid>
    </div>
  );
}
