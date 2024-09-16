import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Box, Grid } from "@mui/material";
import UserBrief from "./UserBrief";
import SomethingAboutMe from "./SomethingAboutMe";
import Contacts from "./Contacts";
import lenis from "../components/animations/lenis";

import upBlack from "../assets/images/btn_icons/upBlack.png";
import upWhite from "../assets/images/btn_icons/upWhite.png";
import Projects from "./Projects";
import TechAndTools from "./TechAndTools";
import Hackathons from "./Hackathons";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    document.body.classList.toggle(styles.darkMode, isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = (newDarkModeState) => {
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("selectedTheme", newDarkModeState ? "dark" : "light");
    document.body.classList.toggle(styles.darkMode, newDarkModeState);
  };

  const handleScroll = (ref = null) => {
    const target = ref?.current || document.body;
    lenis.scrollTo(target, {
      offset: ref ? -80 : 0,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
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
        {showArrow && (
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
          >
            <div
              className={styles.upArrow}
              style={{
                backgroundColor: isDarkMode
                  ? "rgb(49, 49, 49, 0.7)"
                  : "rgb(245, 245, 247)",
                zIndex: 1000,
              }}
              onClick={() => handleScroll(null)}
            >
              <img src={isDarkMode ? upWhite : upBlack} alt="Scroll to top" />
            </div>
          </div>
        )}
        {/* navbar */}
        <Grid item xs={12}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            onNavigate={handleScroll}
            sectionRefs={{
              section1Ref,
              section2Ref,
              section3Ref,
              section4Ref,
              section5Ref,
            }}
          />
        </Grid>
        {/* navbar */}
        {/* user brief section */}
        <Grid
          item
          xs={12}
          mt={10}
          sx={{
            mb: { xs: 60, sm: 0 }, // 20 for xs and 50 for md
          }}
        >
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
        {/* Technologies and Tools */}
        <Grid item xs={12} mt={4}>
          <section id="section4" ref={section3Ref}>
            <TechAndTools isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* Technologies and Tools */}
        {/* project slideshow */}
        <Grid item xs={12}>
          <section id="section3" ref={section2Ref}>
            <Projects isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* project slideshow */}
        {/* hackathons and events */}
        <Grid item xs={12} mt={4}>
          <section id="section4" ref={section4Ref}>
            <Hackathons isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* hackathons and events */}
        {/* contact */}
        <Grid item xs={12} mt={4}>
          <section id="section5" ref={section5Ref}>
            <Contacts isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* contact */}
        {/* copyright note */}
        <Grid item xs={12} mt={4}>
          <Box className={`${styles.copyrightDiv}`}>
            Developed by @Dinul Perera 2024
          </Box>
        </Grid>
        {/* copyright note */}
      </Grid>
    </div>
  );
}
