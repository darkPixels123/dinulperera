import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../contacts.module.css";

// social
import blackEmail from "../assets/images/social_media/blackEmail.png";
import whiteEmail from "../assets/images/social_media/whiteEmail.png";
import { socialMediaInfo } from "./socialMediaInfo";
// social

export default function Contacts({ isDarkMode }) {
  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  function sendEmail() {
    var email = "dinulperera2001@gmail.com";
    window.location.href = `mailto:${email}`;
  }

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
              <h3 className={styles.topicName}>Contact</h3>
            </Grid>
          </Grid>
          <Grid xs={12} mt={-5}>
            <h4 style={{ textAlign: "left" }}>
              Let’s team up to craft something awesome, Together, we can bring
              ideas to life in a way that’s bold, beautiful, and built to
              inspire.
            </h4>
          </Grid>
          {/* map */}
          <Grid
            xs={12}
            container
            sx={{
              marginTop: { xs: "20px", md: "0px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2420699409435!2d79.98871256958446!3d6.894397630976664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251490a54f23b%3A0x9e46305451b3306a!2s69%20Sugathi%20Mawatha!5e0!3m2!1sen!2slk!4v1726235433555!5m2!1sen!2slk"
              style={{
                border: 0,
                borderRadius: "15px",
                width: "100%",
                height: "250px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          {/* map */}
          <Grid xs={12} item container mt={5}>
            {/* contact details */}
            <Grid sm={2} md={3} />
            <Grid xs={12} sm={8} md={6} order={{ xs: 2, md: 1 }}>
              <Grid xs={12} container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    className={`${styles.contactBox1} ${
                      isDarkMode ? styles.darkContact : styles.lightContact
                    }`}
                    sx={{ cursor: "pointer" }}
                    onClick={sendEmail}
                  >
                    <img
                      src={isDarkMode ? whiteEmail : blackEmail}
                      width={20}
                      alt="email"
                    />
                    dinulperera2001@gmail.com
                  </Box>
                </Grid>
                {socialMediaInfo.map((item, index) => {
                  return (
                    <Grid item xs={6} md={6} key={index}>
                      <Box
                        className={`${styles.contactBox1} ${
                          isDarkMode ? styles.darkContact : styles.lightContact
                        }`}
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          goToLink(item.url);
                        }}
                      >
                        <img
                          alt="social_img"
                          src={
                            isDarkMode ? item.whiteImageUrl : item.blackImageUrl
                          }
                          width={20}
                        />
                        {item.name}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            {/* contact details */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
