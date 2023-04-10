import React, { useEffect, useState } from "react";
import { Api } from "../services/Api";

interface Info {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: DataRating;
}

interface DataRating {
  count: number;
  rate: number;
}

export const HomePage = () => {
  const [data, setData] = useState<Info[] | null>(null);

  const getData = async () => {
    const res = await Api("/products");
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const updatePriceToARS = (price: number): string => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "ARS",
    }).format(price * 398);
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  if (!data) return <div>Loading....</div>;
  return (
    <div className="App">
      <button onClick={logout}>LOGOUT</button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>{updatePriceToARS(item.price)} ARS</div>
          </div>
        );
      })}
    </div>
  );
};
