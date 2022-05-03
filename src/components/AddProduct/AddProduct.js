import cls from "classnames";
import styles from "../../styles/AddProduct.module.css";

import AddDetail from "./AddDetail";
import AddImage from "./AddImage";

function AddProduct() {
  return (
    <div className={cls("container",styles.wrapper)}>
      <AddDetail />
      <AddImage />
    </div>
  );
}

export default AddProduct;
