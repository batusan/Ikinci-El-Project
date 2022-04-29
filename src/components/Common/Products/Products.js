import cls from "classnames";
import commonStyles from "../../../styles/Common.module.css";
import ProductCard from "./ProductCard";

function Products(props) {
  console.log(props)
  return (
    <div className={cls("container", commonStyles.Products)}>
      {props.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
