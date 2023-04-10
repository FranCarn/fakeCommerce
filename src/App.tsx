import { useEffect, useState } from "react";
import { Api } from "./services/Api";

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

function App() {
  const [data, setData] = useState<Info[] | null>(null);

  const getData = async () => {
    const res = await Api("/products");
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const updatePriceToARS = (price: number): number => {
    return Math.floor(price * 398);
  };

  if (!data) return <div>Loading....</div>;
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>$ {updatePriceToARS(item.price)}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
