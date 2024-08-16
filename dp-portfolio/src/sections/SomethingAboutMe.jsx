import { Grid, LinearProgress, linearProgressClasses } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import styles from "../somethingAboutMe.module.css";

import { styled } from "@mui/material/styles";

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
      percentage: 90,
    },
    {
      skillName: "Mobile Application Development",
      percentage: 70,
    },
    {
      skillName: "UI UX Design",
      percentage: 80,
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
          <Grid xs={12} lg={6} item container>
            <Grid item xs={12}>
              <h3 className={styles.topicName}>Something About Myself</h3>
            </Grid>
            <Grid item xs={12} className={styles.myDesc}>
              {/* something about me description */}
              <p>
                As a motivated software developer and enthusiastic graphic
                designer, I bring a unique combination of creative and technical
                expertise to every project. My in-depth knowledge of programming
                languages, including Java, enables me to develop high-quality,
                efficient solutions tailored to complex software development
                needs. With extensive experience across diverse industries such
                as e-commerce, education, and healthcare, I have successfully
                completed a wide range of projects, from responsive web designs
                to comprehensive full-stack applications
              </p>
              <p>
                My commitment to continuous professional development ensures
                that I stay at the forefront of industry advancements, allowing
                me to consistently deliver innovative solutions that not only
                meet but exceed client expectations. This dedication to
                excellence is reflected in my proven track record of delivering
                outstanding results, underscored by a deep technical acumen and
                a relentless focus on achieving project success
              </p>
              {/* something about me description */}
            </Grid>
          </Grid>
          <Grid
            mt={10}
            item
            xs={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
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
      </Grid>
    </div>
  );
}
