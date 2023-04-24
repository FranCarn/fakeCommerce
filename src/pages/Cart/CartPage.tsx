import styles from "./CartPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { NotFoundItems } from "../../components/NotFoundItems";
import { Item } from "../HomePage/HomePage";
import { updatePriceToARS } from "../../helpers/updatePriceToARS";
import { RootState } from "../../redux/store";
import { CartCard } from "./components/CartCard";
import { IoMdCart } from "react-icons/io";
export const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state);

  const totalPrice = cart.reduce(
    (total: number, item: Item): number => total + item.price,
    0
  );

  if (!cart.length) return <NotFoundItems />;

  return (
    <div>
      <h1 className={styles.pageTitle}>
        CART <IoMdCart />
      </h1>
      <div className={styles.container}>
        {cart.map((item: Item) => (
          <CartCard item={item} key={item.id} />
        ))}
      </div>
      TOTAL: {updatePriceToARS(totalPrice)} ARS
    </div>
  );
};
