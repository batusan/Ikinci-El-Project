import Banner from "../components/Common/Banner";
import Categories from "../components/Common/Categories";
import Navbar from "../components/Common/Navbar";
import Products from "../components/Common/Products/Products";
import { getAuth } from "../services/AuthService";

import { getCategories, getProducts } from "../services/ProductService";

export default function Home(props) {
  return (
    <div>
      <Navbar isAuth={props.isAuth} />
      <Banner />
      <Categories categories={props.categories} />
      <Products products={props.products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await getProducts(context.query?.category);
  const categories = await getCategories();
  const isAuth = await getAuth(context.req.headers?.cookie);

  return {
    props: { categories: categories, products: products,isAuth : isAuth },
  };
}
