import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../carouselCard.module.css";

import algomak from "../../assets/images/carousel/web/algomak1.png";
import extra from "../../assets/images/carousel/web/extra1.png";
import mint3labs from "../../assets/images/carousel/web/mint3labs.png";

export default function CarouselCard({ isDarkMode }) {
  return (
    <Grid item xs={11}>
      <Box
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        className={`${
          isDarkMode ? styles.DarkCarouselCard : styles.LightCarouselCard
        } ${styles.carouselCard}`}
      >
        {/* image holder */}
        <Box style={{ display: "flex", alignItems: "center" }}>
          <div
            className={`${
              isDarkMode ? styles.DarkImgHolder : styles.LightImgHolder
            } ${styles.imgHolder}`}
          >
            <img src={extra} width={450} alt="card-image" />
          </div>
        </Box>
        <Box className={styles.titleAndDesc}>
          {/* image holder */}
          <div className={`${styles.cardTitle}`}>
            <div className={styles.dot}></div>
            <h2>Algomak Solutions Official Website</h2>
          </div>
          <div className={styles.cardDescription}>
            Alogmak Solutions is a compnay providing software solutions to
            business by designing & building web applications , along with
            domain registrations.
          </div>
          <div className={styles.moreBtnSection}>
            <div
              className={`${
                isDarkMode ? styles.DarkMoreBtn : styles.LightMoreBtn
              } ${styles.moreBtn}`}
            >
              VIEW MORE
            </div>
          </div>
        </Box>
      </Box>
    </Grid>
  );
}
