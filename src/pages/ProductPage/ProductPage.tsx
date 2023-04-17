import React from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams();
  return <div>producto n° {id}</div>;
};
