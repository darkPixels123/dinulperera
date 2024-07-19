import React from "react";
import styles from "../userBrief.module.css";

export default function UserBrief() {
  return (
    <div>
      <div className={`${styles.yours} ${styles.messages}`}>
        <div className={`${styles.message} ${styles.last}`}>
          Hi , I am Dinul Perera
        </div>
      </div>
    </div>
  );
}
