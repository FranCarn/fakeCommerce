import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { BsChevronDown } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={styles.navbarContainer}>
      <span>FAKE STORE</span>

      <BsChevronDown
        size={20}
        className={styles.profileDropDown}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div className={open ? styles.dropDownOpen : styles.dropDownClosed}>
        <Button text="Cart" logo={<IoMdCart />} />
        <Button clickHandler={logout} text="Logout" />
      </div>
    </div>
  );
};
