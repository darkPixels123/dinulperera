import React from "react";
import styles from "../navbar.module.css";
import { Grid } from "@mui/material";
import myBlackLogo from "../../assets/images/navbar-icons/black.png";
import myWhiteLogo from "../../assets/images/navbar-icons/black.png";
import DarkMode from "../darkMode/DarkMode";

export default function Navbar() {
  return (
    // navbar container
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10} className={styles.navbarContainer}>
          <Grid item xs={3} className={styles.myLogoContainer}>
            <img src={myBlackLogo} width={40} height={40} />
          </Grid>
          <Grid item xs={8} className={styles.sectionsContainer}>
            <span>About</span>
            <span>Tech & Tools</span>
            <span>Projects</span>
            <span>Hackathons</span>
            <span>Contact</span>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DarkMode />
          </Grid>
        </Grid>
      </Grid>
    </div>
    // navbar container
  );
}
