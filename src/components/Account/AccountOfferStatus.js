import AccountButtons from "./AccountButtons";
import styles from "@/styles/Account.module.css";

function AccountOfferStatus(props) {
  if (props.type === "OFFERS") {
    return (
      <>
        {props.offer.isStatus != null ? (
          props.offer.isStatus ? (
            <div className={styles.OfferAccept}>{
                <AccountButtons type={props.type} offer={props.offer} />
            }</div>
          ) : (
            <div className={styles.OfferDecline}>Reddedildi</div>
          )
        ) : null}
      </>
    );
  } else {
    return (
      <>
        {props.offer.isStatus == null ? (
          <AccountButtons type={props.type} offer={props.offer} />
        ) : props.offer.isStatus ? (
          <div className={styles.OfferAccept}>Onaylandı</div>
        ) : (
          <div className={styles.OfferDecline}>Reddedildi</div>
        )}
      </>
    );
  }
}

export default AccountOfferStatus;
