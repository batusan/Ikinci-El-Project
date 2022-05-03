import Image from "next/image";
import commonStyles from "../../../styles/Common.module.css";
import { baseURL } from "../../../constants/axios";

function ProductCard(props) {
  return (
    <div className={commonStyles.ProductCard}>
      <div className={commonStyles.ProductCardImage}>
        {props.product.image.formats.small ? (
          <Image
            src={`${baseURL}${props.product.image?.formats.small.url}`}
            alt={props.product.name}
            layout={"fill"}
          />
        ) : (
          <Image
            src={`${baseURL}${props.product.image?.url}`}
            alt={props.product.name}
            layout={"fill"}
          />
        )}
      </div>
      <div className={commonStyles.ProductSpecs}>
        <div className={commonStyles.ProductBrand}>{props.product.brand}</div>
        <div className={commonStyles.ProductColor}>
          <span className={commonStyles.Bold}>Renk:</span> {props.product.color}
        </div>
      </div>
      <div className={commonStyles.ProductPrice}>{props.product.price} TL</div>
    </div>
  );
}

export default ProductCard;
