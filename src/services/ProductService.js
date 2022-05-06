import axios, { URL, requestAll } from "../constants/axios";
import { parseCookie } from "../utils/cookieParser";

export const pageConfig = {
  index: [axios.get(URL.products + `?_limit=1500`), axios.get(URL.categories)],
};

export const getProducts = async (categoryId, limit = 1000) => {
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

export const getColors = async () => {
  try {
    const response = await axios.get(URL.colors);
    if (response.status === 200) {
      return response.data;
    } else {
      return 404;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getIndexProps = async () => {
  try {
    const response = await requestAll(pageConfig.index);
    if (response) {
      return { products: response[0].data, categories: response[1].data };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAccountProps = async (userId, cookie) => {
  try {
    const token = parseCookie(cookie);
    const response = await requestAll([
      axios.get(URL.products + `?users_permissions_user=${userId}`, {
        headers: { Authorization: `Bearer ${token.Auth_Token}` },
      }),
      axios.get(URL.offers + `?users_permissions_user=${userId}`, {
        headers: { Authorization: `Bearer ${token.Auth_Token}` },
      }),
    ]);
    if (response) {
      return { products: response[0].data, offers: response[1].data };
    }
  } catch (error) {
    console.log(error.response);
  }
};
