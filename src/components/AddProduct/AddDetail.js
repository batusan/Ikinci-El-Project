import styles from "../../styles/AddProduct.module.css";
import AddProductForm from "./AddProductForm";

function AddDetail() {
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.title}>Ürün Detayları</div>
      <AddProductForm />
    </div>
  );
}

export default AddDetail;
