import axios from 'axios';

const URL = 'https://api.chucknorris.io/jokes';

export const getCategoriesList = () => {
  return axios
    .get(`${URL}/categories`)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getCategoryItem = category => {
  return axios
    .get(`${URL}/random?category=${category}`)
    .then(res => res.data)
    .catch(() => 'Category not found !');
};
