import Image from 'next/image'
import { baseURL } from '../../constants/axios'
import styles from '../../styles/Account.module.css'

export default function AccountProductCard(props) {
    return <div className={styles.OfferCard}>
        <div className={styles.OfferImage}>
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
        <div className={styles.OfferDetail}>
            <div className={styles.OfferName}>{props.product.name}</div>
            <div className={styles.OfferPrice}> {props.offer.offerPrice} TL</div>
        </div>
    </div>

}