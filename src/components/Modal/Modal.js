import { useState } from "react";
import Image from "next/image";
import { baseURL } from "../../constants/axios";
import CloseIcon from "../../assets/Icons/CloseIcon";
import styles from "../../styles/Modal.module.css";
import Button from "../Inputs/Button";
import commonStyles from "../../styles/Common.module.css";

import OfferSelection from "./OfferSelection";
import OfferInput from "../Inputs/OfferInput";
import { useProductContext } from "../../contexts/ProductContext";
import useNotify from "../../hooks/useNotify";

const Modal = (props) => {
  const notify = useNotify;
  const { setOffer } = useProductContext();

  const handleSubmit = async () => {
    if (props.offerPrice > 0) {
      const response = await setOffer({
        product: props.product.id,
        users_permissions_user: 6,
        offerPrice: props.offerPrice,
      }).then((res) => {
        notify("SUCCESS", "Teklif başarıyla verildi.");
        props.setShow(false);
      });
    } else {
      notify("ERROR", "Yaptığınız teklif hatalı. Tekrar deneyin");
    }
  };

  const clickHandle = () => {
    props.setShow(!props.show);
  };

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
        <div className={styles.modalOfferHeader}>
          Teklif Ver <CloseIcon onClick={clickHandle} />
        </div>
        <div className={styles.modalProductInfo}>
          <div className={styles.modalImage}>
            {props.product.image.formats.small ? (
              <Image
                src={baseURL + props.product.image.formats.small.url}
                alt={props.product.name}
                layout={"fill"}
              />
            ) : (
              <Image
                src={baseURL + props.product.image.url}
                alt={props.product.name}
                layout={"fill"}
              />
            )}
          </div>
          <div className={styles.modalName}>{props.product.name}</div>
          <div className={styles.modalPrice}>{props.product.price} TL</div>
        </div>
        <div className={styles.modalOffer}>
          <OfferSelection
            productPrice={props.product.price}
            setOfferPrice={props.setOfferPrice}
          />
          <OfferInput
            height="45px"
            width="100%"
            placeholder={"Teklif Belirle"}
            onChange={(e) => props.setOfferPrice(parseInt(e.target.value))}
            value={props.offerPrice}
          />
        </div>
        <div className={styles.modalOfferButton}>
          <Button
            width="315px"
            height="45px"
            value="Satın Al"
            className={commonStyles.primaryButton}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
