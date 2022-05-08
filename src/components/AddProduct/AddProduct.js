import cls from "classnames";
import styles from "@/styles/AddProduct.module.css";
import { useFormik } from "formik";

import AddDetail from "./AddDetail";
import AddImage from "./AddImage";
import { useProductContext } from "@/contexts/ProductContext";
import { useState, useEffect } from "react";
import useHandleError from "@/hooks/useHandleErrors";
import { ProductSchema } from "@/schemas/ProductSchema";
import useNotify from "@/hooks/useNotify";
import { useUserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";

function AddProduct() {
  const router = useRouter();
  const notify = useNotify;
  const { createProduct, setLoading } = useProductContext();
  const { userDetail } = useUserContext();
  const [userId, setUserId] = useState(0);
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
      users_permissions_user: userId,
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      formik.resetForm();
      setLoading(false);
      let formData = new FormData();
      formData.append("data", JSON.stringify(values));
      formData.append("files.image", image);

      createProduct(formData)
        .then((res) => {
          if (res.status === 200) {
            notify(
              "SUCCESS",
              "Ürün başarıyla eklendi. Ana sayfaya yönlendiriliyorsunuz."
            );
            setTimeout(function () {
              setImage();
              setLoading(false);
              formik.resetForm();
              router.push(`/`);
            }, 500);
          } else {
            notify("ERROR", "Ürün eklenemedi");
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
  });

  useEffect(() => {
    if (userDetail)
      formik.setFieldValue("users_permissions_user", userDetail.id);
  }, [userDetail]);

  function HandleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formEvent = ControlImage(image, e);
    useHandleError(formEvent, formik, setLoading);
  }

  const ControlImage = (image, formEvent) => {
    if (!image) {
      formEvent = false;
    } else {
      return formEvent;
    }
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
