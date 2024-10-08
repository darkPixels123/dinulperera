import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import styles from "../sideNavbar.module.css";

import collapseWhite from "../../assets/images/navbar-icons/collapse-white.png";
import collapseBlack from "../../assets/images/navbar-icons/collapse-black.png";
import DarkMode from "../darkMode/DarkMode";

export default function SideNavbar({
  darkMode,
  toggleDarkMode,
  onNavigate,
  sectionRefs,
}) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: darkMode ? "rgb(36, 36, 36)" : "rgb(239, 241, 241, 1)",
        color: darkMode ? "rgb(239, 241, 241, 1)" : "rgb(36, 36, 36)",
      }}
      role="presentation"
    >
      <div className={styles.sectionsContainer} style={{ height: 500 }}>
        <DarkMode toggleDarkMode={toggleDarkMode} />
        <h5 onClick={() => onNavigate(sectionRefs.section1Ref)}>About</h5>
        <h5 onClick={() => onNavigate(sectionRefs.section3Ref)}>
          Tech & Tools
        </h5>
        <h5 onClick={() => onNavigate(sectionRefs.section2Ref)}>Projects</h5>
        <h5 onClick={() => onNavigate(sectionRefs.section4Ref)}>Hackathons</h5>
        <h5 onClick={() => onNavigate(sectionRefs.section5Ref)}>Contact</h5>
      </div>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            onClick={toggleDrawer(anchor, true)}
            src={darkMode ? collapseWhite : collapseBlack}
            width={20}
            height={20}
            alt="Logo"
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
