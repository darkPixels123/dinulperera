import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../carouselCard.module.css";

export default function CarouselCard({ isDarkMode, projectDetails }) {
  return (
    <>
      <Grid item xs={11}>
        <Box
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
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
              <img src={projectDetails.image} width={450} alt="card-image" />
            </div>
          </Box>
          <Box className={styles.titleAndDesc}>
            {/* image holder */}
            <div className={`${styles.cardTitle}`}>
              <div className={styles.dot}></div>
              <h2>{projectDetails.name}</h2>
            </div>
            <div className={styles.cardDescription}>
              {projectDetails.description}
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
    </>
  );
}
