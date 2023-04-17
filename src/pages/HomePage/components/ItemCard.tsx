import React from "react";
import { Item } from "../HomePage";
import styles from "./ItemCard.module.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  const navigate = useNavigate();
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
    </div>
  );
};
