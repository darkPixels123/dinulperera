import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import styles from "../hackathons.module.css";

import { hackathons } from "../data/events/hackathon-events";

// Import Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  EffectCards,
} from "swiper/modules";
import "swiper/css";

// animation
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
// animation

export default function Hackathons({ isDarkMode }) {
  const [hackathonName, setHackathonName] = useState("hackathonName");
  const [hackathonOrganizer, setHackathonOrganizer] =
    useState("hackathonOrganizer");
  const [hackathonResult, setHackathonResult] = useState("hackathonResult");
  const [HackathonDescription, setHackathonDescription] = useState(
    "HackathonDescription"
  );

  const handleSlideChange = (swiper) => {
    const currentSlide = hackathons[swiper.realIndex % hackathons.length]; // Ensure it works with looping
    setHackathonName(currentSlide.name);
    setHackathonOrganizer(currentSlide.organizers);
    setHackathonDescription(currentSlide.description);
    setHackathonResult(currentSlide.result);
  };

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
              <h3 className={styles.topicName}>Hackathons & Events</h3>
            </Grid>
          </Grid>
          <Grid xs={12} item container>
            <Grid item xs={12} md={5} className={styles.HackathonCardContainer}>
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
                keyboard={{
                  enabled: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                speed={1000}
                loop={true}
                modules={[
                  Autoplay,
                  Pagination,
                  Navigation,
                  Keyboard,
                  EffectCards,
                ]}
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                onSlideChange={handleSlideChange}
              >
                {hackathons.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <Box className={styles.HackathonCard}>
                          {/* image holder */}
                          <Box className={styles.cardImgContainer}>
                            <img src={item.image} alt="hackathon_img" />
                          </Box>
                          {/* image holder */}
                        </Box>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className={styles.HackathonDescriptionContainer}>
                <h3 className={styles.hackathonName}>{hackathonName}</h3>
                <span className={styles.hackathonOrganizer}>
                  Organized by <span>{hackathonOrganizer}</span>
                </span>
                <span className={styles.hackathonResult}>
                  {hackathonResult}
                </span>
                <span style={{ marginTop: "35px" }}>Description :</span>
                <p className={styles.HackathonDescription}>
                  <TextGenerateEffect words={HackathonDescription} />
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
