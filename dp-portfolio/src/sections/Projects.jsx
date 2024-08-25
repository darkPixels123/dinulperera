import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import styles from "../projects.module.css";

// components
import CarouselCard from "../components/cards/CarouselCard";
// components

export default function Projects({ isDarkMode }) {
  const [carouselCategory, setCarouselCategory] = useState("Web Projects");

  const handleCarouselCategory = (selectedCategory) => {
    setCarouselCategory(selectedCategory);
  };

  const projectCategories = [
    "Web Projects",
    "Contributions",
    "Mobile Apps",
    "Brand Identity",
    "UI UX",
  ];

  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} container>
          <Grid xs={12} item container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "center", sm: "left" },
              }}
            >
              <h3 className={styles.topicName}>Projects</h3>
            </Grid>
            <Grid item xs={12}>
              <Box
                className={`${
                  isDarkMode
                    ? styles.DarkCarouselCategories
                    : styles.LightCarouselCategories
                } ${styles.carouselCategories}`}
                sx={{
                  width: { xs: "95%", md: "80%", lg: "60%" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                }}
              >
                {projectCategories.map((item, index) => {
                  return carouselCategory === item ? (
                    <span
                      className={`${
                        isDarkMode
                          ? styles.DarkCarouselCategorySelected
                          : styles.LightCarouselCategorySelected
                      }`}
                      onClick={() => {
                        handleCarouselCategory(item);
                      }}
                      key={index}
                    >
                      {item}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        handleCarouselCategory(item);
                      }}
                      key={index}
                    >
                      {item}
                    </span>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              mt={4}
              container
              columnSpacing={4}
              sx={{ rowGap: { xs: "30px", md: "0px" } }}
            >
              <CarouselCard isDarkMode={isDarkMode} />
              <CarouselCard isDarkMode={isDarkMode} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
