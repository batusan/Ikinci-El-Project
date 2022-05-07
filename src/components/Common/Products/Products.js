import cls from "classnames";
import { useState, useEffect } from "react";
import { useProductContext } from "../../../contexts/ProductContext";
import commonStyles from "../../../styles/Common.module.css";
import ProductCard from "./ProductCard";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [startProduct, setStartProduct] = useState(0);
  const { addMoreProducts } = useProductContext();

  useEffect(() => {
    if (props.filter) {
      if (props.products) setProducts(filterCategory(props.products));
    } else {
      if (props.products) setProducts(props.products);
    }
  }, [props.products, props.filter]);

  useEffect(() => {
    async function updateStartProduct() {
      await addMoreProducts(startProduct);
    }
    if (startProduct > 0) updateStartProduct();
  }, [startProduct]);

  const filterCategory = (products) => {
    if (products) {
      var filteredProducts = products.filter(
        (product) => product.category?.id === props.filter
      );
      return filteredProducts;
    }
  };

  const onBottom = async () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.scrollHeight - 10
    ) {
      setStartProduct((prevState) => {
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
