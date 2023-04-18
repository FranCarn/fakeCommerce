import React, { useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { ItemCard } from "./components/ItemCard";
import { Loader } from "../../components/Loader";
import styles from "./HomePage.module.scss";
export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: ItemRating;
}

interface ItemRating {
  count: number;
  rate: number;
}

export const HomePage = () => {
  const [data, setData] = useState<Item[] | null>(null);
  const getData = async () => {
    const res = await Api("/products");
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <Loader />;
  return (
    <div className="App">
      <div className={styles.cardContainer}>
        {data.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
