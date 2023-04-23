import React from "react";
import styles from "./Button.module.scss";
interface Props {
  text: string;
  clickHandler?: () => void;
}
export const Button = ({ text, clickHandler }: Props) => {
  return (
    <button className={styles.btn} onClick={clickHandler}>
      {text}
    </button>
  );
};
