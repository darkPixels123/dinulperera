import React from "react";
import styles from "../loading.module.css";
import coffee from "../assets/images/gifs/coffee_loading2.gif";

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
          <img src={coffee} />
          Grabbing Some Coffee ...
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
