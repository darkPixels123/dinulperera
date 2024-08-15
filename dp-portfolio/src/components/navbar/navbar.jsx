import React from "react";
import styles from "../navbar.module.css";
import { Grid } from "@mui/material";
import DarkMode from "../darkMode/DarkMode";
import SideNavbar from "../side-navbar/sideNavbar";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <div style={{ position: "fixed", zIndex: 1000, width: "100%" }}>
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
                : "rgb(239, 241, 241, 0.7)",
            }}
          >
            <Grid container className={styles.navbarContent}>
              {/* mylogo */}
              <Grid item lg={5} className={styles.myLogoContainer}></Grid>
              {/* mylogo */}
              <Grid item lg={6} className={styles.sectionsContainer}>
                <a href="#section1">About</a>
                <a>Tech & Tools</a>
                <a>Projects</a>
                <a>Hackathons</a>
                <a>Contact</a>
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
                <DarkMode toggleDarkMode={toggleDarkMode} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: { xs: "flex", lg: "none" },
          }}
        >
          <Grid
            container
            item
            xs={12}
            className={styles.navbarContainer}
            style={{
              marginRight: "20px",
              marginLeft: "20px",
              backgroundColor: isDarkMode
                ? "rgb(49, 49, 49, 0.7)"
                : "rgb(239, 241, 241, 0.7)",
            }}
          >
            {/* mylogo */}
            <Grid item xs={4} className={styles.myLogoContainer}></Grid>
            {/* mylogo */}
            <Grid item xs={6} />
            <Grid item xs={2} className={styles.collapseIconContainer}>
              <SideNavbar
                darkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
