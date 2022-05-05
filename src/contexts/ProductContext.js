import cookie from "js-cookie";

import { createContext, useContext, useState } from "react";
import axios, { URL, requestAll } from "../constants/axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [usingStatus, setUsingStatus] = useState([]);
  const [categories, setCategories] = useState([]);

  const getColors = async () => {
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

  const getBrands = async () => {
    try {
      const response = await axios.get(URL.brands);
      if (response.status === 200) {
        return response.data;
      } else {
        return 404;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAddProductReq = async () => {
    const brands = axios.get(URL.brands);
    const colors = axios.get(URL.colors);
    const usingStatus = axios.get(URL.usingStatus);
    const categories = axios.get(URL.categories);
    const data = await requestAll([brands, colors, usingStatus, categories]);
    if (data) {
      return data;
    }
  };

  const createProduct = async (formdata) => {
    try {
      const token = cookie.get("Auth_Token");
      const response = await axios.post(URL.products, formdata, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ProductContext.Provider
      value={{ getColors, getBrands, getAddProductReq, createProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
