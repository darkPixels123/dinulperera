import React from "react";
import styles from "../navbar.module.css";
import { Grid } from "@mui/material";
import myBlackLogo from "../../assets/images/navbar-icons/black.png";
import myWhiteLogo from "../../assets/images/navbar-icons/black.png";

export default function Navbar() {
  return (
    // navbar container
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10} className={styles.navbarContainer}>
          <Grid item xs={3} style={{ display: "flex" }}></Grid>
          <Grid item xs={8}>
            <span></span>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </div>
    // navbar container
  );
}
