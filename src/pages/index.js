import { useEffect, useState } from "react";
import Banner from "@/components/Common/Banner";
import Categories from "@/components/Common/Categories";
import Navbar from "@/components/Common/Navbar";
import Products from "@/components/Common/Products/Products";
import { useUserContext } from "@/contexts/UserContext";
import { useProductContext } from "@/contexts/ProductContext";
import { getAuth } from "@/services/AuthService";
import { getIndexProps } from "@/services/ProductService";

export default function Home(props) {
  const [filter, setFilter] = useState();
  const { setUserDetail } = useUserContext();
  const { products, categories, setCategories, setProducts } =
    useProductContext();

  useEffect(() => {
    if (!products) {
      setProducts(props.products);
    }
    setUserDetail(props.isAuth);
    setCategories(props.categories);
  });

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
