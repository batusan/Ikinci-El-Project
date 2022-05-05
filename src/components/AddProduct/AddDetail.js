import styles from "../../styles/AddProduct.module.css";
import AddProductForm from "./AddProductForm";

function AddDetail(props) {
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.title}>Ürün Detayları</div>
      <AddProductForm formik={props.formik} />
    </div>
  );
}

export default AddDetail;
