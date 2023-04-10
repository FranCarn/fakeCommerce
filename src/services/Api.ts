import axios from "axios";

const URL = "https://fakestoreapi.com";
export const Api = async (link: string, dataToSend?: object) => {
  if (dataToSend) {
    try {
      const res = await axios.post(URL + link, dataToSend);
      return res;
    } catch (error) {
      return error;
    }
  }

  try {
    const res = await axios.get(URL + link);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
