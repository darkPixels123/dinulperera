import React from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
    </div>
  );
}
