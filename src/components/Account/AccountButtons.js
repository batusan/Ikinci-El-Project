import { useState } from "react";
import { useProductContext } from "@/contexts/ProductContext";
import styles from "@/styles/Account.module.css";
import Button from "../Inputs/Button";
import Modal from "../Modal/Modal";
import Router from "next/router";

function AccountButtons(props) {
  const { acceptOffer, declineOffer, buyProduct } = useProductContext();
  const [show, setShow] = useState(false);

  const handleAcceptProduct = async () => {
    await acceptOffer(props.offer.id, {
      isStatus: true,
    }).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

  const handleDeleteProduct = async () => {
    await declineOffer(props.offer.id, {
      isStatus: false,
    }).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

  const openModal = () => {
    setShow(true);
  };

  const handleBuy = async () => {
    const response = await buyProduct(props.offer.product.id, {
      isSold: true,
    }).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

  if (props.type === "OFFERS") {
    return (
      <div className={styles.OfferButtons}>
        {!props.offer.product.isSold && (
          <Button
            className={styles.primary}
            width={86}
            height={30}
            value={"Satın Al"}
            onClick={openModal}
          />
        )}

        <span>Onaylandı</span>
        <Modal onClick={handleBuy} show={show} setShow={setShow} />
      </div>
    );
  } else {
    return (
      <div className={styles.OfferButtons}>
        <Button
          className={styles.primary}
          width={86}
          height={30}
          value={"Onayla"}
          onClick={handleAcceptProduct}
        />
        <Button
          className={styles.danger}
          width={86}
          height={30}
          value={"Reddet"}
          onClick={handleDeleteProduct}
        />
      </div>
    );
  }
}

export default AccountButtons;
