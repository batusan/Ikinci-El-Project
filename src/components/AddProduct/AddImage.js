import styles from "@/styles/AddProduct.module.css";
import FileUploader from "../Inputs/DrapDropFileUploader";

function AddImage(props) {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.title}>Ürün Görseli</div>

      <FileUploader
        onChange={(e) => {
          props.setImage(e);
        }}
        value={props.image}
      />
    </div>
  );
}

export default AddImage;
