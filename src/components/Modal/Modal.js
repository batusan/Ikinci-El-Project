import { useEffect, useState } from "react";
import Image from "next/image";
import { baseURL } from "../../constants/axios";
import CloseIcon from "../../assets/Icons/CloseIcon";
import styles from "../../styles/Modal.module.css";
import Button from "../Inputs/Button";
import commonStyles from "../../styles/Common.module.css";

import OfferSelection from "./OfferSelection";
import OfferInput from "../Inputs/OfferInput";

const Modal = (props) => {
  const [show, setShow] = useState(false);

  const clickHandle = () => {
    setShow(!show);
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal} id="modal">
        <div className={styles.modalOfferHeader}>
          Teklif Ver <CloseIcon onClick={clickHandle} />
        </div>
        <div className={styles.modalProductInfo}>
          <div className={styles.modalImage}>
            <Image
              src={baseURL + props.product.image.formats.small.url}
              alt={props.product.name}
              layout={"fill"}
            />
          </div>
          <div className={styles.modalName}>{props.product.name}</div>
          <div className={styles.modalPrice}>{props.product.price} TL</div>
        </div>
        <div className={styles.modalOffer}>
          <OfferSelection />
          <OfferInput
            height="45px"
            width="100%"
            placeholder={"Teklif Belirle"}
          />
        </div>
        <div className={styles.modalOfferButton}>
          <Button
            width="315px"
            height="45px"
            value="Satın Al"
            className={commonStyles.primaryButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
