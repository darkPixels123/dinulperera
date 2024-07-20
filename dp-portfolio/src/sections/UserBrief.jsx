import React from "react";
import styles from "../userBrief.module.css";
import Avatar from "@mui/material/Avatar";

// typing animation
import Typed from "typed.js";
// typing animation

import myImg from "../assets/images/profile-photos/my-image1.png";
import { Grid } from "@mui/material";

import dayTimeGif from "../assets/images/gifs/pokemon-daytime2.gif";
import nightTimeGif from "../assets/images/gifs/pokemon-nighttime2.gif";

export default function UserBrief({ isDarkMode }) {
  const positions = React.useRef(null);
  const intro = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(positions.current, {
      strings: [
        "Web Developer",
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

    const typed2 = new Typed(intro.current, {
      strings: ["ello, I'm"],
      typeSpeed: 200,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      typed2.destroy();
    };
  }, []);

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
          <Grid xs={1} />
          <Grid xs={10}>
            <div className={styles.userProfileCard}>
              {/* image */}
              <Avatar
                alt="Remy Sharp"
                src={myImg}
                sx={{
                  width: 80,
                  height: 80,
                  border: "solid rgb(0, 122, 255) 4px",
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
            {/* user card  */}
            {/* positions */}
            <div className={styles.userPositions}>
              <span ref={positions} className={styles.positions} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
