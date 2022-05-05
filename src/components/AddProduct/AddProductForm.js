import Input from "../Inputs/Input";
import Label from "../Inputs/Label";
import styles from "../../styles/AddProduct.module.css";
import TextArea from "../Inputs/TextArea";
import Select from "../Inputs/CustomSelect";
import OfferInput from "../Inputs/OfferInput";
import { useProductContext } from "../../contexts/ProductContext";

import { useState, useEffect, useCallback } from "react";
import Button from "../Inputs/Button";
import Checkbox from "../Inputs/Checkbox";

function AddProductForm(props) {
  const formik = props.formik;
  const { getAddProductReq } = useProductContext();

  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [usingStatus, setUsingStatus] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  const fetchData = useCallback(async () => {
    //const data = await getColors().then((res) => setColors(res));
    const data = await getAddProductReq().then((result) => {
      setColors(result[1].data);
      setBrands(result[0].data);
      setUsingStatus(result[2].data);
      setCategories(result[3].data);
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.inputWrapper}>
        <Label htmlFor="name" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
      <div className={styles.inputWrapper}>
        <Label htmlFor="description" value="Açıklama" />
        <TextArea
          name="description"
          cols="40"
          rows="5"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div className={styles.categoryWrapper}>
        <div className={styles.halfInputWrapper}>
          <Label htmlFor="category" value="Kategori" />
          <Select
            name="category"
            list={categories}
            placeholder="Kategori Seç"
            onChange={(e) => {
              formik.setFieldValue("category", e);
            }}
            value={formik.values.category}
          />
        </div>
        <div className={styles.halfInputWrapper}>
          <Label htmlFor="brand" value="Marka" />
          <Select
            name="brand"
            placeholder="Marka Seç"
            onChange={(e) => {
              formik.setFieldValue("brand", e);
            }}
            value={formik.values.brand}
            list={brands}
          />
        </div>
        <div className={styles.halfInputWrapper}>
          <Label htmlFor="color" value="Renk" />
          <Select
            name="color"
            placeholder="Renk Seç"
            onChange={(e) => {
              formik.setFieldValue("color", e);
            }}
            value={formik.values.color}
            list={colors}
          />
        </div>
        <div className={styles.halfInputWrapper}>
          <Label htmlFor="status" value="Kullanım Durumu" />
          <Select
            name="status"
            placeholder="Kullanım durumu seç"
            onChange={(e) => {
              formik.setFieldValue("status", e);
            }}
            value={formik.values.status}
            list={usingStatus}
          />
        </div>
        <div>
          <Label htmlFor="price" value="Fiyat" />
          <OfferInput
            name="price"
            width={"236px"}
            height={"45px"}
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
        <div className={styles.toggleWrapper}>
          Teklif Opsiyonu{" "}
          <Checkbox
            onChange={formik.handleChange}
            value={formik.values.isOfferable}
            className={styles.toggle}
          />
        </div>
        <Button
          type="submit"
          width="235px"
          height="45px"
          value="Kaydet"
          className={styles.sendButton}
        />
      </div>
    </form>
  );
}

export default AddProductForm;
