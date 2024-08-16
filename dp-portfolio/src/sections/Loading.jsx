import React from "react";
import styles from "../loading.module.css";

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
        <h4
          style={{
            fontFamily: "monospace",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Please Wait ...
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
