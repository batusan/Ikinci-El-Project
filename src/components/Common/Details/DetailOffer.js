
import styles from "../../../styles/Common.module.css";

function DetailOffer(props) {
  return (
    <>
      {props.myOffer && (
        <div className={styles.myOffer}>
          Verilen Teklif:{" "}
          <span className={styles.myOfferPrice}>{props.myOffer.offerPrice} TL</span>
        </div>
      )}
    </>
  );
}

export default DetailOffer;
