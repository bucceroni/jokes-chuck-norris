import axios from "axios";

const URL = "https://api.chucknorris.io/jokes";

export const getCategories = async () => {
  return await axios
    .get(`${URL}/categories`)
    .then(res => res.data)
    .catch(error => console.log(error));
};


