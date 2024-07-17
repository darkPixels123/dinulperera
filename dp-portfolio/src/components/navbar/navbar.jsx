import React, { useState } from "react";
import styles from "../navbar.module.css";
import { Grid } from "@mui/material";
import myBlackLogo from "../../assets/images/navbar-icons/black.png";
import myWhiteLogo from "../../assets/images/navbar-icons/white.png";
import DarkMode from "../darkMode/DarkMode";

export default function Navbar() {
  const selectedTheme = localStorage.getItem("selectedTheme");

  const [isDarkMode, setIsDarkMode] = useState(
    selectedTheme === "dark" ? true : false
  );

  return (
    // navbar container
    <>
      <div>
        <Grid container sx={{ display: { xs: "none", lg: "flex" } }}>
          <Grid item lg={1} />
          <Grid
            container
            item
            lg={10}
            className={styles.navbarContainer}
            style={{
              backgroundColor: isDarkMode
                ? "rgb(49, 49, 49, 0.7)"
                : "rgb(239, 241, 241, 1)",
            }}
          >
            <Grid item lg={4} className={styles.myLogoContainer}>
              <img
                src={isDarkMode ? myWhiteLogo : myBlackLogo}
                width={40}
                height={40}
                alt="Logo"
              />
            </Grid>
            <Grid item lg={7} className={styles.sectionsContainer}>
              <span>About</span>
              <span>Tech & Tools</span>
              <span>Projects</span>
              <span>Hackathons</span>
              <span>Contact</span>
            </Grid>
            <Grid
              item
              lg={1}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DarkMode navbarMode={setIsDarkMode} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: { xs: "block", lg: "none" },
          }}
        >
          <Grid item xs={1} />
          <Grid
            container
            item
            xs={12}
            className={styles.navbarContainer}
            style={{
              backgroundColor: isDarkMode
                ? "rgb(49, 49, 49, 0.7)"
                : "rgb(239, 241, 241, 1)",
            }}
          >
            <Grid item xs={4} className={styles.myLogoContainer}>
              <img
                src={isDarkMode ? myWhiteLogo : myBlackLogo}
                width={40}
                height={40}
                alt="Logo"
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
    // navbar container
  );
}
