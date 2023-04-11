import React from "react";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 4000);
  return (
    <div>
      <Loader />
      Something went wrong! you are redirected to Login
    </div>
  );
};
