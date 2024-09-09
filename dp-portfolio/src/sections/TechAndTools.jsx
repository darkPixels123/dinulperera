import React from "react";
import styles from "../techandtools.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { developmentTools } from "../data/techStack/developmentTools";
import { designTools } from "../data/techStack/designTools";
import { editingTools } from "../data/techStack/editingTools";
import { technologies } from "../data/techStack/technologies";

export default function TechAndTools({ isDarkMode }) {
  function navigateToSite(link) {
    window.open(link, "_blank");
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", sm: "left" },
            }}
          >
            <h3 className={styles.topicName}>Technologies, Tools & Gears</h3>
          </Grid>
          {/* languages and tools */}
          <Grid item xs={12} container mt={-5}>
            <Accordion
              sx={{
                backgroundColor: "rgb(245, 245, 247,0)",
                width: "100%",
                border: "none",
                boxShadow: "none",
              }}
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: isDarkMode ? "white" : "black" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3
                  className={styles.techName}
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  Technologies
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} className={styles.developmentToolsSection}>
                  {technologies.map((item, index) => {
                    return (
                      <div
                        className={`${
                          isDarkMode
                            ? styles.darkTechCard
                            : styles.lightTechCard
                        } ${styles.techCard1}`}
                        key={index}
                      >
                        <Grid container sx={{ height: "100%" }}>
                          <Grid
                            xs={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "start",
                            }}
                          >
                            <img
                              alt="Tool logo"
                              src={item.image}
                              style={{ margin: "20px", width: "80px" }}
                            />
                          </Grid>
                          <Grid
                            xs={8}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "start",
                              paddingTop: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <span
                              style={{ color: isDarkMode ? "white" : "black" }}
                            >
                              {item.name}
                            </span>
                            <Box className={styles.toolDescription}>
                              {item.description.length > 70
                                ? item.description.substring(0, 70) + " ... "
                                : item.description}
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              <span
                                style={{
                                  color: isDarkMode ? "white" : "black",
                                }}
                                className={styles.exploreBtn}
                                onClick={() => {
                                  navigateToSite(item.link);
                                }}
                              >
                                docs
                              </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* languages and tools */}
          {/* development tools */}
          <Grid item xs={12} container mt={-2}>
            <Accordion
              sx={{
                backgroundColor: "rgb(245, 245, 247,0)",
                width: "100%",
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: isDarkMode ? "white" : "black" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3
                  className={styles.techName}
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  Development Tools
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} className={styles.developmentToolsSection}>
                  {developmentTools.map((item, index) => {
                    return (
                      <div
                        className={`${
                          isDarkMode
                            ? styles.darkTechCard
                            : styles.lightTechCard
                        } ${styles.techCard1}`}
                        key={index}
                      >
                        <Grid container sx={{ height: "100%" }}>
                          <Grid
                            xs={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              alt="Tool logo"
                              src={item.image}
                              style={{ margin: "20px", width: "80px" }}
                            />
                          </Grid>
                          <Grid
                            xs={8}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "start",
                              paddingTop: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <span
                              style={{ color: isDarkMode ? "white" : "black" }}
                            >
                              {item.name}
                            </span>
                            <Box className={styles.toolDescription}>
                              {item.description.length > 70
                                ? item.description.substring(0, 70) + " ... "
                                : item.description}
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              <span
                                style={{
                                  color: isDarkMode ? "white" : "black",
                                }}
                                className={styles.exploreBtn}
                                onClick={() => {
                                  navigateToSite(item.link);
                                }}
                              >
                                explore
                              </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* development tools */}
          {/* design tools */}
          <Grid item xs={12} container mt={-2}>
            <Accordion
              sx={{
                backgroundColor: "rgb(245, 245, 247,0)",
                width: "100%",
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: isDarkMode ? "white" : "black" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3
                  className={styles.techName}
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  Design Tools
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} className={styles.designToolsSection}>
                  {designTools.map((item, index) => {
                    return (
                      <div
                        className={`${
                          isDarkMode
                            ? styles.darkTechCard
                            : styles.lightTechCard
                        } ${styles.techCard1}`}
                        key={index}
                      >
                        <Grid container sx={{ height: "100%" }}>
                          <Grid
                            xs={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              alt="Tool logo"
                              src={item.image}
                              style={{
                                margin: "20px",
                                width: "80px",
                              }}
                            />
                          </Grid>
                          <Grid
                            xs={8}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "start",
                              paddingTop: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <span
                              style={{ color: isDarkMode ? "white" : "black" }}
                            >
                              {item.name}
                            </span>
                            <Box className={styles.toolDescription}>
                              {item.description.length > 70
                                ? item.description.substring(0, 70) + " ... "
                                : item.description}
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              <span
                                style={{
                                  color: isDarkMode ? "white" : "black",
                                }}
                                className={styles.exploreBtn}
                                onClick={() => {
                                  navigateToSite(item.link);
                                }}
                              >
                                explore
                              </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* design tools */}
          {/* editing tools */}
          <Grid item xs={12} container mt={-2}>
            <Accordion
              sx={{
                backgroundColor: "rgb(245, 245, 247,0)",
                width: "100%",
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: isDarkMode ? "white" : "black" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3
                  className={styles.techName}
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  Editing Tools
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} className={styles.designToolsSection}>
                  {editingTools.map((item, index) => {
                    return (
                      <div
                        className={`${
                          isDarkMode
                            ? styles.darkTechCard
                            : styles.lightTechCard
                        } ${styles.techCard1}`}
                        key={index}
                      >
                        <Grid container sx={{ height: "100%" }}>
                          <Grid
                            xs={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              alt="Tool logo"
                              src={item.image}
                              style={{
                                margin: "20px",
                                width: "80px",
                              }}
                            />
                          </Grid>
                          <Grid
                            xs={8}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "start",
                              paddingTop: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <span
                              style={{ color: isDarkMode ? "white" : "black" }}
                            >
                              {item.name}
                            </span>
                            <Box className={styles.toolDescription}>
                              {item.description.length > 70
                                ? item.description.substring(0, 70) + " ... "
                                : item.description}
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              <span
                                style={{
                                  color: isDarkMode ? "white" : "black",
                                }}
                                className={styles.exploreBtn}
                                onClick={() => {
                                  navigateToSite(item.link);
                                }}
                              >
                                explore
                              </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* editing tools */}
        </Grid>
      </Grid>
    </div>
  );
}
