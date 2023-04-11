import React from "react";
import { Item } from "../HomePage";
import styles from "./ItemCard.module.scss";
interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  const updatePriceToARS = (price: number): string => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "ARS",
    }).format(price * 398);
  };
  return (
    <div>
      <img src={item.image} alt={item.title} className={styles.productImage} />
      <div className={styles.productTitle}>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.category}</div>
      <div>{updatePriceToARS(item.price)} ARS</div>
    </div>
  );
};
