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

// project categories
import { webProjects } from "../data/projects/web-projects";
import { contributions } from "../data/projects/contribution-projects";
import { mobileProjects } from "../data/projects/mobile-projects";
import { brandProjects } from "../data/projects/brand-projects";
import { uiuxProjects } from "../data/projects/uiux-projects";
// project categories

// carousel icons
import webWhite from "../assets/images/carousel-icons/web-white.png";
import webBlack from "../assets/images/carousel-icons/web-black.png";
import mobileBlack from "../assets/images/carousel-icons/mobile-black.png";
import mobileWhite from "../assets/images/carousel-icons/mobile-white.png";
import contributionWhite from "../assets/images/carousel-icons/contribution-white.png";
import contributionBlack from "../assets/images/carousel-icons/contribution-black.png";
import uiBlack from "../assets/images/carousel-icons/ui-black.png";
import uiWhite from "../assets/images/carousel-icons/ui-white.png";
import brandingWhite from "../assets/images/carousel-icons/branding-white.png";
import brandingBlack from "../assets/images/carousel-icons/branding-black.png";
// carousel icons

export default function Projects({ isDarkMode }) {
  const [carouselCategory, setCarouselCategory] = useState("Web Projects");
  const [currentCarousel, setCurrentCarousel] = useState(webProjects);

  const handleCarouselCategory = (selectedCategory) => {
    setCarouselCategory(selectedCategory);
    if (selectedCategory === "Web Projects") {
      setCurrentCarousel(webProjects);
    } else if (selectedCategory === "Contributions") {
      setCurrentCarousel(contributions);
    } else if (selectedCategory === "Mobile Apps") {
      setCurrentCarousel(mobileProjects);
    } else if (selectedCategory === "Brand Identity") {
      setCurrentCarousel(brandProjects);
    } else if (selectedCategory === "UI UX") {
      setCurrentCarousel(uiuxProjects);
    }
  };

  const projectCategories = [
    { name: "Web Projects", imgWhite: webWhite, imgBlack: webBlack },
    {
      name: "Contributions",
      imgWhite: contributionWhite,
      imgBlack: contributionBlack,
    },
    { name: "Mobile Apps", imgWhite: mobileWhite, imgBlack: mobileBlack },
    {
      name: "Brand Identity",
      imgWhite: brandingWhite,
      imgBlack: brandingBlack,
    },
    { name: "UI UX", imgWhite: uiWhite, imgBlack: uiBlack },
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
                marginBottom: "10px",
              }}
            >
              <h3 className={styles.topicName}>Projects</h3>
            </Grid>
            <Grid item xs={12}>
              {/* large device project categories - no carousel */}
              <Box
                className={`${
                  isDarkMode
                    ? styles.DarkCarouselCategories
                    : styles.LightCarouselCategories
                } ${styles.carouselCategories}`}
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: "fit-content",
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                }}
              >
                {projectCategories.map((item, index) => {
                  return carouselCategory === item.name ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        gap: 0,
                      }}
                      className={`${
                        isDarkMode
                          ? styles.DarkCarouselCategorySelected
                          : styles.LightCarouselCategorySelected
                      }`}
                    >
                      <img
                        src={isDarkMode ? item.imgWhite : item.imgBlack}
                        width={15}
                        alt="category_img"
                      />
                      <span
                        style={{ textWrap: "nowrap" }}
                        onClick={() => {
                          handleCarouselCategory(item.name);
                        }}
                        key={index}
                      >
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <span
                      style={{ textWrap: "nowrap" }}
                      onClick={() => {
                        handleCarouselCategory(item.name);
                      }}
                      key={index}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </Box>
              {/* large device project categories - no carousel */}
              {/* small device project categories - carousel   */}
              <Box
                className={`${
                  isDarkMode
                    ? styles.DarkCarouselCategories
                    : styles.LightCarouselCategories
                } ${styles.carouselCategories}`}
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: { xs: "90%", md: "80%" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                  borderLeft: "5px #007bff solid",
                  borderRight: "5px #007bff solid",
                }}
              >
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  style={{ height: "100%" }}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation, Keyboard]}
                  className="mySwiper"
                  breakpoints={{
                    340: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    668: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1100: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {projectCategories.map((item, index) => {
                    return carouselCategory === item.name ? (
                      <SwiperSlide
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          textWrap: "nowrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            gap: 0,
                          }}
                          className={`${
                            isDarkMode
                              ? styles.DarkCarouselCategorySelected
                              : styles.LightCarouselCategorySelected
                          }`}
                        >
                          <img
                            src={isDarkMode ? item.imgWhite : item.imgBlack}
                            width={15}
                            alt="category_img"
                          />
                          <span
                            style={{ textWrap: "nowrap" }}
                            onClick={() => {
                              handleCarouselCategory(item.name);
                            }}
                            key={index}
                          >
                            {item.name}
                          </span>
                        </div>
                      </SwiperSlide>
                    ) : (
                      <SwiperSlide
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          textWrap: "nowrap",
                        }}
                      >
                        <span
                          onClick={() => {
                            handleCarouselCategory(item.name);
                          }}
                        >
                          {item.name}
                        </span>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
              {/* small device project categories - carousel   */}
            </Grid>
            <Grid item xs={12} mt={4} container>
              <Swiper
                keyboard={{
                  enabled: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                className="mySwiper"
                style={{ width: "100%", height: "100%" }}
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  868: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1250: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                {currentCarousel.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <CarouselCard
                        isDarkMode={isDarkMode}
                        projectDetails={item}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
