import styles from "@/styles/Modal.module.css";
import commonStyles from "@/styles/Common.module.css";
import Button from "../Inputs/Button";
import { useProductContext } from "@/contexts/ProductContext";

function Modal(props) {
  const { loading } = useProductContext();

  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.modalBackground}
        onClick={() => props.setShow(false)}
      ></div>
      <div className={styles.modal} id="modal">
        <div className={styles.modalHeader}>Satın Al</div>
        <div className={styles.modalBody}>Satın Almak istiyor musunuz?</div>
        <div className={styles.modalButton}>
          <Button
            width="150px"
            height="45px"
            value="Vazgeç"
            className={commonStyles.secondaryButton}
            onClick={() => props.setShow(false)}
          />
          <Button
            width="150px"
            height="45px"
            value="Satın Al"
            className={commonStyles.primaryButton}
            onClick={props.onClick}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
