import React from "react";
import styles from "../loading.module.css";
// import coffee from "../assets/images/gifs/coffee_loading2.gif";

// mylogo
import dpBlackLogo from "../assets/images/logos/dp Logo-black.png";
import dpWhiteLogo from "../assets/images/logos/dp Logo-white.png";
// mylogo

export default function Loading({ isDarkMode }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        top: 0,
        bottom: 0,
      }}
    >
      <div className={styles.wrapper}>
        <img
          src={isDarkMode ? dpWhiteLogo : dpBlackLogo}
          width={50}
          alt="loading-image"
        />
        <h4
          style={{
            fontFamily: "monospace",
            color: isDarkMode ? "white" : "black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Please wait ...
        </h4>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
