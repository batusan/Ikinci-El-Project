
import styles from "../../../styles/Common.module.css";

function DetailOffer(props) {
  return (
    <div>
      {props.myOffer && (
        <div className={styles.myOffer}>
          Verilen Teklif:{" "}
          <span className={styles.myOfferPrice}>{props.myOffer.offerPrice} TL</span>
        </div>
      )}
    </div>
  );
}

export default DetailOffer;
