import Image from "next/image";
import { baseURL } from "@/constants/axios";
import styles from "@/styles/Account.module.css";
import AccountOfferStatus from "./AccountOfferStatus";
import NoImage from "@/assets/images/noimage.jpg";
import { useRouter } from "next/router";

export default function AccountProductCard(props) {
  const router = useRouter();

  const handleClick = () => {
    if (props.product) {
      router.push(`/details/${props.product.id}`);
    }
  };

  return (
    <div className={styles.OfferCard}>
      <div className={styles.OfferImage} onClick={handleClick}>
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
          <span className={styles.OfferName} onClick={handleClick}>
            {props.product.name}
          </span>
          <span className={styles.OfferPriceWrapper}>
            {props.type === "PRODUCT" ? <>Alınan </> : <>Verilen </>}
            Teklif :
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
