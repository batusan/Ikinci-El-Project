import Image from "next/image";
import { baseURL } from "../../constants/axios";
import styles from "../../styles/Account.module.css";
import AccountOfferStatus from "./AccountOfferStatus";
import NoImage from "../../assets/images/noimage.jpg";

export default function AccountProductCard(props) {
  return (
    <div className={styles.OfferCard}>
      <div className={styles.OfferImage}>
        {props.product.image ? (
          <>
            {props.product.image.formats.small ? (
              <Image
                src={`${baseURL}${props.product.image?.formats.small.url}`}
                alt={props.product.name}
                layout={"fill"}
                priority
              />
            ) : (
              <Image
                src={`${baseURL}${props.product.image?.url}`}
                alt={props.product.name}
                layout={"fill"}
                priority
              />
            )}
          </>
        ) : (
          <Image src={NoImage} alt={props.product.name} layout={"fill"} />
        )}
      </div>
      <div className={styles.OfferDetail}>
        <div className={styles.OfferLeft}>
          {props.product.name}
          <span className={styles.OfferPriceWrapper}>
            Alınan Teklif :{" "}
            <span className={styles.OfferPrice}>
              {props.offer.offerPrice} TL
            </span>
          </span>
        </div>
        <AccountOfferStatus offer={props.offer} type={props.type} />
      </div>
    </div>
  );
}
