/* eslint-disable react-hooks/exhaustive-deps */
import cls from "classnames";
import { useState, useEffect } from "react";
import { useProductContext } from "@/contexts/ProductContext";
import commonStyles from "@/styles/Common.module.css";
import ProductCard from "./ProductCard";

function Products(props) {
  const [products, setProducts] = useState([]);
  const { addMoreProducts, scrollCount, setScrollCount } = useProductContext();
  const [initRender, setInitRender] = useState(true);

  /**
   * Prevent execute function from init render
   * If my function gonna exec on pre-render , Its gonna add previous added products and
   * duplicate all of previous 15 product.
   *
   * initRender gonna set false on init ---> product loader on scroll not gonna break.
   */
  useEffect(() => {
    async function updateStartProduct() {
      await addMoreProducts(scrollCount);
    }
    if (initRender) setInitRender(false);
    if (!initRender) {
      if (scrollCount > 0) updateStartProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollCount]);

  useEffect(() => {
    const filterCategory = (products) => {
      if (products) {
        var filteredProducts = products.filter(
          (product) => product.category?.id === props.filter
        );
        return filteredProducts;
      }
    };
    if (props.filter) {
      if (props.products) setProducts(filterCategory(props.products));
    } else {
      if (props.products) setProducts(props.products);
    }
  }, [props.products, props.filter]);

  const onBottom = async () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.scrollHeight - 10
    ) {
      setScrollCount((prevState) => {
        return prevState + 15;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onBottom);
    return () => window.removeEventListener("scroll", onBottom);
  }, []);

  return (
    <div className={cls("container", commonStyles.Products)}>
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

export default Products;
