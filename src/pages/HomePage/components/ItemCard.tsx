import React from "react";
import { Item } from "../HomePage";
import styles from "./ItemCard.module.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  const navigate = useNavigate();
  const updatePriceToARS = (price: number): string => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "ARS",
    }).format(price * 398);
  };
  const handleRedirect = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className={styles.card} onClick={handleRedirect}>
      <div>
        <div className={styles.productTitle}>{item.title}</div>
        <img
          src={item.image}
          alt={item.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoSection}>
        <div>{item.description}</div>
        <div>{item.category}</div>
        <div>{updatePriceToARS(item.price)} ARS</div>
      </div>
    </div>
  );
};
