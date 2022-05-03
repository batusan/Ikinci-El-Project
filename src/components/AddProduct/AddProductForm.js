import Input from "../Inputs/Input";
import Label from "../Inputs/Label";
import styles from "../../styles/AddProduct.module.css";
import TextArea from "../Inputs/TextArea";

function AddProductForm() {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <Label htmlFor="identifier" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
      <div className={styles.inputWrapper}>
        <Label htmlFor="identifier" value="Açıklama" />
        <TextArea name="Text1" cols="40" rows="5" />
      </div>
      <div className={styles.halfInputWrapper}>
        <Label htmlFor="identifier" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
      <div className={styles.halfInputWrapper}>
        <Label htmlFor="identifier" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
      <div className={styles.halfInputWrapper}>
        <Label htmlFor="identifier" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
      <div className={styles.halfInputWrapper}>
        <Label htmlFor="identifier" value="Ürün Adı" />
        <Input
          height="45px"
          width="100%"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
        />
      </div>
    </div>
  );
}

export default AddProductForm;
