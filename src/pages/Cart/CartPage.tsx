import React from "react";
import { Button } from "../../components/Button";
import styles from "./CartPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { NotFound } from "../../components/NotFound";
import { removeFromCart } from "../../redux/cartReducer";
import { Item } from "../HomePage/HomePage";
import { MdRemoveShoppingCart } from "react-icons/md";
import { updatePriceToARS } from "../../helpers/updatePriceToARS";
export const CartPage = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (!cart.length) return <NotFound />;
  return cart.map((item: Item) => (
    <div className={styles.container}>
      <div>
        <img
          src={item.image}
          alt={item.title}
          className={styles.productImage}
          draggable={false}
        />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.productTitle}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
        <div>Category: {item.category.toUpperCase()}</div>
        <div className={styles.price}>{updatePriceToARS(item.price)} ARS</div>
        <Button
          logo={<MdRemoveShoppingCart />}
          clickHandler={() => dispatch(removeFromCart(item))}
        />
      </div>
    </div>
  ));
};
