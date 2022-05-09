import Image from "next/image";
import commonStyles from "@/styles/Common.module.css";
import { baseURL } from "@/constants/axios";
import { useRouter } from "next/router";
import NoImage from "@/assets/images/noimage.jpg";

function ProductCard(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/details/${props.product.id}`);
  };

  return (
    <div className={commonStyles.ProductCard} onClick={handleClick}>
      <div className={commonStyles.ProductCardImage}>
        {props.product.image ? (
          <>
            {props.product.image.formats?.small ? (
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
          </>
        ) : (
          <Image src={NoImage} alt={props.product.name} layout={"fill"} />
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
