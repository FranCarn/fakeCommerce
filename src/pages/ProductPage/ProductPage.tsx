import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { Item } from "../HomePage/HomePage";
import { Api } from "../../services/Api";
import styles from "./ProductPage.module.scss";
export const ProductPage = () => {
  const [data, setData] = useState<Item | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await Api(`/products/${id}`);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  const updatePriceToARS = (price: number): string => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "ARS",
    }).format(price * 398);
  };
  const handleBack = () => {
    navigate("/home");
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <Loader />;
  return (
    <div className={styles.container}>
      <span onClick={handleBack}>back</span>
      <div>
        <div className={styles.productTitle}>{data.title}</div>
        <img
          src={data.image}
          alt={data.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoSection}>
        <div>{data.description}</div>
        <div>{data.category}</div>
        <div>{updatePriceToARS(data.price)} ARS</div>
      </div>
    </div>
  );
};
