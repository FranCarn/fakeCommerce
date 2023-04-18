import React from "react";
import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <PuffLoader color="#36d7b7" />
      <span className={styles.loaderText}>Loading...</span>
    </div>
  );
};
