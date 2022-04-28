import axios, { URL } from "../constants/axios";

const type = {
  products: URL.products,
  category: URL.categories,
};

export const getProducts = async (categoryId) => {
  try {
    const query = categoryId ? `${URL.categories}/${categoryId}` : URL.products;
    const response = await axios.get(query);
    if (response.status === 200) {
      return response;
    } else {
      return 404;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(URL.categories);
    if (response.status === 200) {
      return response;
    } else {
      return 404;
    }
  } catch (error) {}
};
