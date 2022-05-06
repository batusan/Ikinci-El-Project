import { useEffect, useState } from "react";
import Banner from "../components/Common/Banner";
import Categories from "../components/Common/Categories";
import Navbar from "../components/Common/Navbar";
import Products from "../components/Common/Products/Products";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductContext } from "../contexts/ProductContext";
import { getAuth } from "../services/AuthService";
import { getIndexProps } from "../services/ProductService";

export default function Home(props) {
  const [filter, setFilter] = useState();
  const { setUserDetail } = useAuthContext();
  const { products, categories, setCategories, setProducts } =
    useProductContext();
  useEffect(() => {
    setUserDetail(props.isAuth);
    setProducts(props.products);
    setCategories(props.categories);
  }, []);
  return (
    <div>
      <Navbar isAuth={props.isAuth} />
      <Banner />
      <Categories categories={categories} setFilter={setFilter} />
      <Products products={products} filter={filter} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await getIndexProps();
  const isAuth = await getAuth(context.req.headers?.cookie);
  return {
    props: {
      categories: response.categories,
      products: response.products,
      isAuth: isAuth,
    },
  };
}
