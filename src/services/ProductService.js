import axios, { URL } from "../constants/axios";

export const getProducts = async (categoryId, limit = 15) => {
  try {
    const query = categoryId ? `${URL.categories}/${categoryId}` : URL.products;
    const response = await axios.get(query + `?_limit=${limit}`);
    if (response.status === 200) {
      return categoryId ? Object.values(response.data.products) : response.data;
    } else {
      return 404;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(URL.products + `/${productId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return 404;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(URL.categories);
    if (response.status === 200) {
      return response.data;
    } else {
      return 404;
    }
  } catch (error) {}
};
