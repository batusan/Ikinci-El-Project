import cls from "classnames";
import styles from "../../styles/AddProduct.module.css";
import { useFormik } from "formik";

import AddDetail from "./AddDetail";
import AddImage from "./AddImage";
import { useProductContext } from "../../contexts/ProductContext";
import { testRequest } from "../../services/TestService";
import { useState } from "react";

function AddProduct() {
  const { createProduct } = useProductContext();
  const [image, setImage] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: 0,
      status: "",
      brand: "",
      color: "",
      isOfferable: false,
      price: 0,
      isSold: false,
      users_permission_user: 6,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("data", JSON.stringify(values));
      formData.append("files.image", image);
      console.log(formData.get("files.image"));
      console.log(formData.get("data"));
      createProduct(formData);
    },
  });
  return (
    <div className={cls("container", styles.wrapper)}>
      <AddDetail formik={formik} />
      <div className={styles.line}></div>
      <AddImage image={image} setImage={setImage} />
    </div>
  );
}

export default AddProduct;
