import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={styles.navbarContainer}>
      <span>FAKE STORE</span>
      <button onClick={logout} className={styles.btn}>
        LOGOUT
      </button>
    </div>
  );
};
