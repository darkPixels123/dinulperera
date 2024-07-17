import React, { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";
import { Grid } from "@mui/material";

import lenis from "../components/animations/lenis";

export default function Main() {
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
          <Navbar />
        </Grid>
        <Grid xs={12}></Grid>
        {/* navbar */}
        {/* about section */}
        
        {/* about section */}
      </Grid>
    </div>
  );
}
