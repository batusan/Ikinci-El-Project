import axios from "axios";

export const baseURL = "https://bootcamp.akbolat.net";

export default axios.create({ baseURL });

export const requestAll = async (array) => {
  try {
    const response = await axios.all(array);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const URL = {
  login: `/auth/local/`,
  register: "/auth/local/register",
  offers: "/offers",
  categories: "/categories",
  products: "/products",
  isAuth: "/users/me",
  colors: "/colors",
  brands: "/brands",
  usingStatus: "/using-statuses",
};
