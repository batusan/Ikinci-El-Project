import axios, { URL } from "../constants/axios";

export const getProducts = async (categoryId) => {
  try {
    const query = categoryId ? `${URL.categories}/${categoryId}` : URL.products;
    const response = await axios.get(query);
    if (response.status === 200) {
      console.log(response.data);
      return categoryId
        ? Object.values(response.data.products)
        : response.data;
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
      return response.data;
    } else {
      return 404;
    }
  } catch (error) {}
};
