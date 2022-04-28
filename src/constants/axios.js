import axios from "axios";

export const baseURL = "https://bootcamp.akbolat.net";
export default axios.create({ baseURL });

export const URL = {
  login: `/auth/local/`,
  register: "/auth/local/register",
  offers: "/offers",
  categories: "/categories",
  products: "/products",
};
