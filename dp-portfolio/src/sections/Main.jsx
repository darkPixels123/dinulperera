import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";
import UserBrief from "./UserBrief";
import SomethingAboutMe from "./SomethingAboutMe";
import lenis from "../components/animations/lenis";
<<<<<<< Updated upstream
import Loading from "./Loading";
=======

import upBlack from "../assets/images/btn_icons/upBlack.png";
import upWhite from "../assets/images/btn_icons/upWhite.png";
import Projects from "./Projects";
>>>>>>> Stashed changes

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        // Show arrow after scrolling down 100px
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
<<<<<<< Updated upstream
    if (ref.current) {
      lenis.scrollTo(ref.current, {
        offset: -80, // Adjust this value to account for any fixed headers
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
=======
    const target = ref?.current || document.body;
    lenis.scrollTo(target, {
      offset: -90, // Adjust this value to account for any fixed headers
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
>>>>>>> Stashed changes
  };

  return (
    <div className={styles.mainContainer}>
      <Grid container>
<<<<<<< Updated upstream
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
=======
        {showArrow && ( // Conditionally render the arrow button
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
              onClick={() => handleScroll()} // Scroll to top when arrow is clicked
            >
              <img src={isDarkMode ? upWhite : upBlack} alt="Scroll to top" />
            </div>
          </div>
        )}
>>>>>>> Stashed changes
        {/* navbar */}
        <Grid item xs={12}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            onNavigate={handleScroll}
            sectionRefs={{ section1Ref, section2Ref, section3Ref }}
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
        {/* project slideshow */}
        <Grid item xs={12}>
          <section id="section3" ref={section2Ref}>
            <Projects isDarkMode={isDarkMode} />
          </section>
        </Grid>
        {/* project slideshow */}
      </Grid>
    </div>
  );
}
