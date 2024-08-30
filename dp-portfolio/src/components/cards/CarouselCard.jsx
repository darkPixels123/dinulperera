import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "../carouselCard.module.css";
import Drawer from "@mui/material/Drawer";

export default function CarouselCard({ isDarkMode, projectDetails }) {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <Box
          sx={{
            width: "auto",
            height: 750,
            backgroundColor: isDarkMode
              ? "rgb(49, 49, 49)"
              : "rgb(239, 241, 241, 0.7)",
          }}
          role="presentation"
          onClick={toggleDrawer("bottom", false)}
          onKeyDown={toggleDrawer("bottom", false)}
        ></Box>
      </Drawer>
      <Grid item xs={11}>
        <Box
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            paddingLeft: { sm: "20px" },
            height: { sm: "280px" },
            display: "flex",
          }}
          className={`${
            isDarkMode ? styles.DarkCarouselCard : styles.LightCarouselCard
          } ${styles.carouselCard}`}
        >
          {/* image holder */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: { xs: "20px", sm: "0px" },
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              className={`${
                isDarkMode ? styles.DarkImgHolder : styles.LightImgHolder
              } ${styles.imgHolder}`}
            >
              <img src={projectDetails.image} width={450} alt="card-image" />
            </div>
          </Box>
          <Box
            className={styles.titleAndDesc}
            sx={{
              textAlign: { xs: "left" },
              flexDirection: { xs: "column" },
              display: { xs: "flex" },
              justifyContent: { xs: "left" },
              alignItems: { xs: "center", sm: "end" },
              paddingLeft: { xs: "0px", sm: "20px" },
              paddingRight: { xs: "0px", sm: "20px" },
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* image holder */}
            <Box
              className={`${styles.cardTitle}`}
              sx={{ justifyContent: { xs: "center", sm: "left" } }}
            >
              <div>
                <div className={styles.dot}></div>
              </div>
              <h2>{projectDetails.name}</h2>
            </Box>
            <Box
              className={styles.cardDescription}
              sx={{ height: { xs: "40px", sm: "250px" } }}
            >
              {projectDetails.description.length > 70
                ? projectDetails.description.substring(0, 70) + " ... "
                : projectDetails.description}
            </Box>
            <div className={styles.moreBtnSection}>
              <div
                className={`${
                  isDarkMode ? styles.DarkMoreBtn : styles.LightMoreBtn
                } ${styles.moreBtn}`}
                onClick={toggleDrawer("bottom", true)}
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
