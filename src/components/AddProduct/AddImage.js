import styles from "../../styles/AddProduct.module.css";
import FileUploader from "../Inputs/FileUploader";

function AddImage() {
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.title}>Ürün Görseli</div>
      <FileUploader />
    </div>
  );
}

export default AddImage;
