import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { BsChevronDown } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const goCart = () => {
    navigate("/cart");
  };
  const goHome = () => {
    if (location.pathname === "/home") return;
    navigate("/home");
  };
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className={styles.navbarContainer}>
      <span onClick={goHome} className={styles.title}>
        FAKE STORE
      </span>

      <BsChevronDown
        size={20}
        className={styles.profileDropDown}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div className={open ? styles.dropDownOpen : styles.dropDownClosed}>
        <Button text="Cart" logo={<IoMdCart />} clickHandler={goCart} />
        <Button clickHandler={logout} text="Logout" />
      </div>
    </div>
  );
};
