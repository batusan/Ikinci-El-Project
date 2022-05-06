import cls from "classnames";
import { useState, useEffect } from "react";
import commonStyles from "../../../styles/Common.module.css";
import ProductCard from "./ProductCard";

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.filter) {
      if (props.products) setProducts(filterCategory(props.products));
    } else {
      if (props.products) setProducts(props.products);
    }
  }, [props.products, props.filter]);

  const filterCategory = (products) => {
    if (products) {
      var filteredProducts = products.filter(
        (product) => product.category.id === props.filter
      );
      return filteredProducts;
    }
  };

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
