import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
interface Props {
  children: JSX.Element;
}
export const Layout = ({ children }: Props) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      {children}
    </>
  );
};
