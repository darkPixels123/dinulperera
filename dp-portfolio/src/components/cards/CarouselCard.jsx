import { Avatar, AvatarGroup, Badge, Box, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import styles from "../carouselCard.module.css";
import Drawer from "@mui/material/Drawer";

// profile image
import profileImg1 from "../../assets/images/profile-photos/my-image1.png";
// profile image

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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#007bff",
      color: "#007bff",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -2.5,
        left: -2.5,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "3px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <Drawer anchor={"bottom"} open={state["bottom"]}>
        <Box
          sx={{
            width: "auto",
            height: { xs: "fit-content", lg: "100vh" },
            backgroundColor: isDarkMode
              ? "rgb(19,19,19)"
              : "rgb(239, 241, 241, 0.7)",
            overflowY: "scroll",
          }}
          paddingBottom={3}
          role="presentation"
        >
          <Grid container>
            <Grid item xs={12} container style={{ height: "fit-content" }}>
              <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} style={{ height: "fit-content" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "space-between" },
                      alignItems: { xs: "start" },
                      flexDirection: { xs: "row" },
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      gap: 10,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          color: !isDarkMode
                            ? "rgb(49, 49, 49)"
                            : "rgb(239, 241, 241)",
                          borderBottom: !isDarkMode
                            ? "1px solid rgba(19, 19, 19, 0.2)"
                            : "1px solid rgba(227, 227, 227, 0.4)",
                          paddingBottom: "10px",
                        }}
                        className={styles.projectName}
                      >
                        {projectDetails.name}
                      </h3>
                    </div>
                    <div>
                      <h3
                        onClick={toggleDrawer("bottom", false)}
                        style={{
                          color: !isDarkMode
                            ? "rgb(49, 49, 49)"
                            : "rgb(239, 241, 241)",
                          fontSize: "1.0rem",
                          cursor: "pointer",
                        }}
                      >
                        close
                      </h3>
                    </div>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1} />
                <Grid
                  item
                  xs={10}
                  sx={{
                    paddingTop: { xs: "20px", lg: "0px" },
                    paddingLeft: "20px",
                  }}
                >
                  <div className={styles.proImgName}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar alt="Remy Sharp" src={profileImg1} />
                    </StyledBadge>
                    <div className={styles.myName}>
                      <span
                        style={{
                          color: !isDarkMode
                            ? "rgb(49, 49, 49)"
                            : "rgb(239, 241, 241)",
                          fontSize: "1rem",
                        }}
                      >
                        Dinul Perera
                      </span>
                      <span
                        style={{
                          color: "#007bff",
                        }}
                      >
                        Available For Work
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.projectDescription}
                    style={{
                      color: !isDarkMode
                        ? "rgb(49, 49, 49)"
                        : "rgb(239, 241, 241)",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        container
                        xs={12}
                        className={styles.DrawerProjectImg}
                      >
                        <Box className={styles.DrawerProjectImgHolder}>
                          <img
                            alt="project"
                            src={projectDetails.image}
                            width={600}
                          />
                        </Box>
                        <Grid xs={12} sx={{ textAlign: "center" }}>
                          <a
                            className={styles.projectLink}
                            href={projectDetails.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: !isDarkMode
                                ? "rgb(49, 49, 49)"
                                : "rgb(239, 241, 241)",
                            }}
                          >
                            View Full Project
                          </a>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <h4>Description</h4>
                        <p>{projectDetails.description}</p>
                      </Grid>
                      {projectDetails.colaboration === "group" &&
                      projectDetails.members.length > 0 ? (
                        <Grid item xs={12}>
                          <h4>Group Members</h4>
                          <div className={styles.techTagContainer}>
                            <AvatarGroup>
                              {projectDetails.members.map((item, index) => {
                                return (
                                  <Avatar
                                    key={index}
                                    alt={item}
                                    src="/static/images/avatar/1.jpg"
                                  />
                                );
                              })}
                            </AvatarGroup>
                          </div>
                        </Grid>
                      ) : null}
                      <Grid item xs={12}>
                        <h4>Technologies</h4>
                        <div className={styles.techTagContainer}>
                          {projectDetails.technologies.map((item, index) => {
                            return (
                              <div
                                style={{
                                  backgroundColor: isDarkMode
                                    ? "rgb(49, 49, 49)"
                                    : "rgb(239, 241, 241)",
                                }}
                                key={index}
                                className={styles.tag}
                              >
                                {item}
                              </div>
                            );
                          })}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
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
