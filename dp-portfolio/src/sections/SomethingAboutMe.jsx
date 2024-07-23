import { Grid } from "@mui/material";
import React from "react";

import styles from "../somethingAboutMe.module.css";

export default function SomethingAboutMe({ isDarkMode }) {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} container>
        <Grid item xs={6}>
          {/* something about me description */}
          <h3 className={styles.topicName}>Something about my self</h3>
          {/* something about me description */}
        </Grid>
        <Grid item xs={6}>
          Skill progress bar
        </Grid>
      </Grid>
    </Grid>
  );
}
