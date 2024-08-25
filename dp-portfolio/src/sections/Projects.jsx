import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import styles from "../projects.module.css";

// Import Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";

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
              <Swiper
                keyboard={{
                  enabled: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                slidesPerView={2}
                loop={true}
                spaceBetween={10} // Adjust this value as needed
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                className="mySwiper"
                style={{ width: "100%", height: "100%" }} // Ensure Swiper takes full space
              >
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CarouselCard isDarkMode={isDarkMode} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CarouselCard isDarkMode={isDarkMode} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CarouselCard isDarkMode={isDarkMode} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CarouselCard isDarkMode={isDarkMode} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CarouselCard isDarkMode={isDarkMode} />
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
