import React from "react";
import styles from "../userBrief.module.css";

export default function UserBrief() {
  return (
    <div>
      {/* user card  */}
      <div>
        
        <div className={`${styles.yours} ${styles.messages}`}>
          <div className={`${styles.message} ${styles.last}`}>Hello , I'm</div>
        </div>
      </div>
      {/* user card  */}
    </div>
  );
}
