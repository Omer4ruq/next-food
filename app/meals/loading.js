import React from "react";
import styles from "./loading.module.css";
export default function loading() {
  return (
    <div>
      <h1 className={styles.loading}>Fetching data...</h1>
    </div>
  );
}
