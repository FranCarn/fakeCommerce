import React, { ReactElement } from "react";
import styles from "./Button.module.scss";
interface Props {
  text?: string;
  clickHandler: () => void;
  logo?: ReactElement;
}
export const Button = ({ text, clickHandler, logo }: Props) => {
  if (logo && text)
    return (
      <div>
        <button
          className={`${styles.btnFlex} ${styles.btn}`}
          onClick={clickHandler}
        >
          {text}
          {logo}
        </button>
      </div>
    );
  if (logo)
    return (
      <div>
        <button
          className={`${styles.btnFlex} ${styles.btn}`}
          onClick={clickHandler}
        >
          {logo}
        </button>
      </div>
    );

  return (
    <button className={styles.btn} onClick={clickHandler}>
      {text}
    </button>
  );
};
