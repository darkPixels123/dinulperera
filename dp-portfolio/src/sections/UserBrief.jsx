import React from "react";
import styles from "../userBrief.module.css";
import Avatar from "@mui/material/Avatar";

// typing animation
import Typed from "typed.js";
// typing animation

// download btns
import whiteDownload from "../assets/images/btn_icons/downloadWhite.png";
import blackDownload from "../assets/images/btn_icons/downloadBlack.png";
// download btns

// social media info
import { socialMediaInfo } from "./socialMediaInfo";
// social media info

import myImg from "../assets/images/profile-photos/my-image1.png";
import { Box, Grid } from "@mui/material";

import dayTimeGif from "../assets/images/gifs/pokemon-daytime2.gif";
import nightTimeGif from "../assets/images/gifs/pokemon-nighttime2.gif";

import myCV from "../assets/download/CV.pdf";

export default function UserBrief({ isDarkMode }) {
  const positions = React.useRef(null);
  const intro = React.useRef(null);
  const [introMsgTrigger, setIntroMsgTrigger] = React.useState(false);

  React.useEffect(() => {
    const typed = new Typed(positions.current, {
      strings: [
        "Developer",
        "Graphic Designer",
        "UI UX Designer",
        "Video Editor",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 100,
      showCursor: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = myCV; // Path to your PDF file
    link.download = "dinulPerera.pdf"; // The name for the downloaded file
    link.click();
  };

  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  React.useEffect(() => {
    const typed2 = new Typed(intro.current, {
      strings: ["ello, I'm"],
      typeSpeed: 200,
      showCursor: false,
    });
    return () => {
      typed2.destroy();
    };
  }, [introMsgTrigger]);

  return (
    <div>
      {/* user card  */}
      <Grid container>
        <Grid
          style={{ width: "100%" }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            alt="animation gif"
            src={isDarkMode ? nightTimeGif : dayTimeGif}
            style={{
              width: "50vw",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.2,
            }}
          />
        </Grid>
        <Grid item container style={{ position: "absolute" }}>
          <Grid item xs={1} />
          <Grid item xs={10} container>
            <Grid item xs={12}>
              {/* user card  */}
              <div className={styles.userProfileCard}>
                {/* image */}
                <Avatar
                  alt="Remy Sharp"
                  src={myImg}
                  sx={{
                    width: 80,
                    height: 80,
                    border: "solid rgb(0, 122, 255) 4px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    setIntroMsgTrigger(!introMsgTrigger);
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={`${styles.yours} ${styles.messages}`}>
                    <div className={`${styles.message} ${styles.last}`}>
                      H<span ref={intro} className={styles.introTxt} />
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "-20px",
                      paddingLeft: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                    }}
                  >
                    <h2 className={styles.myName}>Dinul Perera.</h2>
                    <h4 className={styles.myTitle}>
                      Bsc(Hons) in Information and Technology(UG)
                    </h4>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* positions */}
              <div className={styles.userPositions}>
                <span ref={positions} className={styles.positions} />
              </div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ marginTop: { xs: "-90px", md: "0px" } }}
            >
              {/* something about me download my cv section*/}
              <Grid item container xs={12} lg={6}>
                <Grid item xs={12}>
                  <div className={styles.somethingAboutMe}>
                    <p style={{ textAlign: "start" }}>
                      I'm a skilled developer and a graphic designer with a keen
                      eye to create attractive as well as user-friendly
                      applications, I am experienced in various development
                      enviornments and multiple programming languages. I am
                      always looking on how to find ways to leave an experience
                      for the users of my projects and levelling up my skills in
                      the IT industry.
                    </p>
                  </div>
                </Grid>
                <Grid item container>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    lg={5}
                    mt={2}
                    sx={{
                      display: { xs: "flex" },
                      justifyContent: { xs: "center", lg: "start" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <div
                      className={`${
                        isDarkMode
                          ? styles.DarkdownloadResumeBtn
                          : styles.LightdownloadResumeBtn
                      } ${styles.downloadBtn}`}
                      onClick={downloadResume}
                    >
                      Download Resume
                      <div>
                        <img
                          src={isDarkMode ? whiteDownload : blackDownload}
                          alt="downloadBtn"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    lg={5}
                    mt={2}
                    sx={{
                      display: { xs: "flex" },
                      justifyContent: { xs: "center", md: "start" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <div className={styles.availableDiv}>
                      <div class={styles.bouncingDot}></div> Available for work
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} />
              <Grid
                item
                container
                xs={5}
                lg={4}
                sx={{
                  display: { xs: "none", lg: "block" },
                }}
              >
                {/* social media */}
                <div className={styles.socialMediaSection} style={{}}>
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Grid
                      container
                      rowGap={2}
                      columnGap={2}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {socialMediaInfo.map((item, index) => {
                        return (
                          <Grid
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className={`${
                              isDarkMode
                                ? styles.DarkSocialMediaBtn
                                : styles.LightSocialMediaBtn
                            } ${styles.socialMediaBtn}`}
                            item
                            md={5}
                            key={index}
                          >
                            <div
                              onClick={() => {
                                goToLink(item.url);
                              }}
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <img
                                alt="social"
                                src={
                                  isDarkMode
                                    ? item.whiteImageUrl
                                    : item.blackImageUrl
                                }
                              />
                              {console.log(
                                "image url:",
                                isDarkMode
                                  ? item.whiteImageUrl
                                  : item.blackImageUrl
                              )}
                              <span>{item.name}</span>
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
