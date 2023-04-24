import React from "react";
import { Item } from "../../HomePage/HomePage";
import styles from "../CartPage.module.scss";
import { updatePriceToARS } from "../../../helpers/updatePriceToARS";
import { Button } from "../../../components/Button";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartReducer";
import { toast } from "react-toastify";

interface Props {
  item: Item;
}

export const CartCard = ({ item }: Props) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart(item));
    toast("Item removed from cart succesfully", { type: "success" });
  };

  return (
    <div className={styles.card}>
      <span className={styles.productTitle}>{item.title}</span>
      <img
        src={item.image}
        alt={item.title}
        className={styles.productImage}
        draggable={false}
      />
      <hr />
      <div className={styles.infoSection}>
        <span className={styles.price}>{updatePriceToARS(item.price)} ARS</span>
        <Button
          logo={<MdRemoveShoppingCart title="Remove item from cart" />}
          clickHandler={() => handleRemoveFromCart(item)}
        />
      </div>
    </div>
  );
};
