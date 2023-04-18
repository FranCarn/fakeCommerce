import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { Item } from "../HomePage/HomePage";
import { Api } from "../../services/Api";
import styles from "./ProductPage.module.scss";
import { Button } from "../../components/Button/Button";
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
    <>
      <Button clickHandler={handleBack} text="Back" />
      <div className={styles.container}>
        <div>
          <img
            src={data.image}
            alt={data.title}
            className={styles.productImage}
            draggable={false}
          />
        </div>
        <div className={styles.infoSection}>
          <div className={styles.productTitle}>{data.title}</div>
          <div className={styles.description}>{data.description}</div>
          <div>Category: {data.category.toUpperCase()}</div>
          <div className={styles.price}>{updatePriceToARS(data.price)} ARS</div>
        </div>
      </div>
    </>
  );
};
