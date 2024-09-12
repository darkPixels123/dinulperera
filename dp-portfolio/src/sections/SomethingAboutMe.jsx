import {
  Grid,
  LinearProgress,
  linearProgressClasses,
  Box,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import styles from "../somethingAboutMe.module.css";

import { styled } from "@mui/material/styles";

// images
import developer1 from "../assets/images/display-images/developer1.jpeg";
import developer6 from "../assets/images/display-images/developer6.jpeg";

import designer1 from "../assets/images/display-images/designer1.jpeg";
import designer2 from "../assets/images/display-images/designer2.jpeg";
// images

export default function SomethingAboutMe({ isDarkMode }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgressBars();
        } else {
          resetProgressBars();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      skillName: "Web Design",
      percentage: 85,
    },
    {
      skillName: "Web Development",
      percentage: 80,
    },
    {
      skillName: "Mobile Application Development",
      percentage: 70,
    },
    {
      skillName: "UI UX Design",
      percentage: 85,
    },
    {
      skillName: "Graphic Design",
      percentage: 80,
    },
    {
      skillName: "Brand and Logo Design",
      percentage: 60,
    },
    {
      skillName: "Video Editing",
      percentage: 80,
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: isDarkMode
        ? "rgb(49, 49, 49, 0.9)"
        : "rgb(239, 241, 241, 0.9)",
    },
    [`&.${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light"
          ? "rgb(0, 122, 255)"
          : "rgb(0, 122, 255)",
    },
  }));

  const [progressValues, setProgressValues] = useState([]);

  const animateProgressBars = () => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setProgressValues((prevValues) => {
          const newValue = Math.min(prevValues[index] + 1, skill.percentage);
          const newValues = [...prevValues];
          newValues[index] = newValue;
          return newValues;
        });
      }, 10);
    });

    setTimeout(() => {
      intervals.forEach(clearInterval);
    }, Math.max(...skills.map((skill) => skill.percentage)) * 20);
  };

  const resetProgressBars = () => {
    setProgressValues(skills.map(() => 0));
  };

  useEffect(() => {
    resetProgressBars();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} container>
          <Grid
            xs={12}
            lg={6}
            item
            container
            style={{ alignItems: "flex-start" }}
          >
            <Grid
              item
              xs={12}
              className={styles.myDesc}
              sx={{ marginTop: { xs: "50px", md: "-30px" } }}
            >
              <h3 className={styles.topicName}>Something About Myself</h3>
              {/* something about me description */}
              <p style={{ marginTop: "30px" }}>
                As a motivated software developer and enthusiastic graphic
                designer, I bring a unique combination of creative and technical
                expertise to every project. My in-depth knowledge of programming
                languages, including JavaScript, PHP, Java enables me to develop
                high-quality, efficient solutions tailored to complex software
                development needs. With extensive experience across diverse
                industries such as e-commerce, education, and healthcare, I have
                successfully completed a wide range of projects, from responsive
                web designs to comprehensive full-stack applications.
              </p>
              <p>
                My commitment to continuous professional development ensures
                that I stay at the forefront of industry advancements, allowing
                me to consistently deliver innovative solutions that not only
                meet but exceed client expectations. This dedication to
                excellence is reflected in my proven track record of delivering
                outstanding results, underscored by a deep technical acumen and
                a relentless focus on achieving project success.
              </p>
              <p>
                In my free time , I make content for my YouTube channel and my
                Instagram page. I love the process of shooting and editing
                videos , and I think I can make an impact to the world through
                content creation.
              </p>
              {/* something about me description */}
            </Grid>
          </Grid>
          <Grid
            sx={{ mt: { xs: 3, lg: 8 } }}
            item
            xs={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* progress bars */}
            <div
              ref={sectionRef}
              className={`${
                isDarkMode
                  ? styles.DarkProgressBarContainer
                  : styles.LightProgressBarContainer
              } ${styles.progressBarContainer}`}
            >
              {skills.map((item, index) => {
                return (
                  <>
                    {/* card 1 - web design */}
                    <div className={styles.progressCard}>
                      <label>{item.skillName}</label>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ flexGrow: 1, marginRight: "10px" }}>
                          <BorderLinearProgress
                            variant="determinate"
                            value={progressValues[index] || 0}
                            style={{
                              transition:
                                progressValues.length !== 0
                                  ? "width 2s ease"
                                  : "none",
                            }}
                          />
                        </div>
                        <span>{item.percentage}%</span>
                      </div>
                    </div>
                    {/* card 1 - web design */}
                  </>
                );
              })}
            </div>
            {/* progress bars */}
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item container mt={8}>
          <Grid item xs={1} />
          <Grid item xs={10} container sx={{ gap: { xs: "20px", md: "0px" } }}>
            {/* exprience and counts small */}
            <Grid xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <div
                className={`${
                  isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                } ${styles.CounterDivSmall} ${styles.CounterDiv}`}
              >
                <div className={`${styles.imgHolder}`}>
                  <img src={developer6} width={700} alt="developer" />
                </div>
                <div className={`${styles.CountSmall} ${styles.Count}`}>
                  <h3>2 years of</h3>
                  <h4>Developer Experience</h4>
                </div>
              </div>
            </Grid>
            {/* exprience and counts small */}
            {/* exprience and counts medium */}
            <Grid
              md={6}
              sx={{
                display: { xs: "none", md: "block" },
                height: "100%",
              }}
            >
              <div
                className={`${
                  isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                } ${styles.CounterDivMedium} ${styles.CounterDiv}`}
                style={{ height: "100%", padding: "0px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "column", lg: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: { md: "center", lg: "left" },
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                  }}
                >
                  <div className={`${styles.imgHolder}`}>
                    <img
                      src={developer1}
                      style={{ width: "80vw", maxWidth: "280px" }}
                      alt="developer"
                    />
                  </div>
                  <div
                    className={`${styles.CountMedium} ${styles.Count}`}
                    style={{ paddingLeft: "20px" }}
                  >
                    <h3>2 years of</h3>
                    <h4>Developer Experience</h4>
                  </div>
                </Box>
              </div>
            </Grid>
            {/* exprience and counts medium */}
            <Grid
              xs={12}
              md={6}
              lg={6}
              container
              paddingLeft={2}
              columnSpacing={2}
              rowSpacing={2}
            >
              <Grid item xs={5} sm={6} lg={4} xl={6}>
                <div
                  className={`${
                    isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                  } ${styles.CounterDivMedium} ${styles.CounterDiv}`}
                  style={{ height: "100px" }}
                >
                  <div
                    className={`${styles.CountMedium} ${styles.Count}`}
                    style={{ textAlign: "center" }}
                  >
                    <h3>5+</h3>
                    <h4>Web Projects</h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={7} sm={6} lg={4} xl={6}>
                <div
                  className={`${
                    isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                  } ${styles.CounterDivMedium} ${styles.CounterDiv}`}
                  style={{ height: "100px" }}
                >
                  <div
                    className={`${styles.CountMedium} ${styles.Count}`}
                    style={{ textAlign: "center" }}
                  >
                    <h3>2+</h3>
                    <h4>Mobile Applications</h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <div
                  className={`${
                    isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                  } ${styles.CounterDivMedium} ${styles.CounterDiv}`}
                  style={{ height: "100px" }}
                >
                  <div
                    className={`${styles.imgHolder2}`}
                    style={{ height: "100px" }}
                  >
                    <Box
                      sx={{
                        display: { xs: "block", lg: "none" },
                        width: "fit-content",
                      }}
                    >
                      <img src={designer1} height={120} alt="designer" />
                    </Box>
                  </div>
                  <div
                    className={`${styles.CountMedium} ${styles.Count}`}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      paddingLeft: "20px",
                    }}
                  >
                    <h3>2+</h3>
                    <h4>UI UX Projects</h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} xl={8}>
                <div
                  className={`${
                    isDarkMode ? styles.DarkCounterDiv : styles.LightCounterDiv
                  } ${styles.CounterDivMedium} ${styles.CounterDiv}`}
                  style={{ flexDirection: "row", height: "100px" }}
                >
                  <div
                    className={`${styles.CountMedium} ${styles.Count}`}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      paddingRight: "20px",
                    }}
                  >
                    <h3>2+</h3>
                    <h4>Brand Identity Projects</h4>
                  </div>
                  <div
                    className={`${styles.imgHolder2}`}
                    style={{ height: "100px" }}
                  >
                    <img src={designer2} height={150} alt="designer" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
