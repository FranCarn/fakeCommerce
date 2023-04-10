import axios from "axios";

const URL = "https://fakestoreapi.com";
export const Api = async (link: string, dataToSend?: object) => {
  if (dataToSend) {
    const res = await axios.post(URL + link, dataToSend);
    return res;
  }
  const res = await axios.get(URL + link);
  return res.data;
};
