import cls from "classnames";
import styles from "../../styles/AddProduct.module.css";
import { useFormik } from "formik";

import AddDetail from "./AddDetail";
import AddImage from "./AddImage";
import { useProductContext } from "../../contexts/ProductContext";
import { testRequest } from "../../services/TestService";
import { useState } from "react";
import useHandleError from "../../hooks/useHandleErrors";
import { ProductSchema } from "../../schemas/ProductSchema";
import useNotify from "../../hooks/useNotify";
import { useAuthContext } from "../../contexts/AuthContext";

function AddProduct() {
  const notify = useNotify;
  const { createProduct } = useProductContext();
  const { userDetail } = useAuthContext();
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
      price: null,
      isSold: false,
      users_permission_user: userDetail.id,
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("data", JSON.stringify(values));
      formData.append("files.image", image);     
      createProduct(formData);
    },
  });

  const HandleSubmit = async (e) => {
    useHandleError(e, formik);
    ControlImage(image);
  };

  const ControlImage = (image) => {
    if (!image) notify("ERROR", "Resim alanı zorunludur.");
  };

  return (
    <div className={cls("container", styles.wrapper)}>
      <AddDetail formik={formik} handleSubmit={HandleSubmit} />
      <div className={styles.line}></div>
      <AddImage image={image} setImage={setImage} />
    </div>
  );
}

export default AddProduct;
