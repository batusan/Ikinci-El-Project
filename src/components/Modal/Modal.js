import styles from "../../styles/Modal.module.css";
import commonStyles from "../../styles/Common.module.css";
import Button from "../Inputs/Button";
import { useProductContext } from "../../contexts/ProductContext";
import Router from "next/router";
function Modal(props) {
  const { buyProduct } = useProductContext();

  if (!props.show) {
    return null;
  }
  const handleBuy = async () => {
    const response = await buyProduct(props.product.id, {
      isSold: true,
    }).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

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
            onClick={handleBuy}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
