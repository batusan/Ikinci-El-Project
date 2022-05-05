import Image from "next/image";
import commonStyles from "../../../styles/Common.module.css";
import { baseURL } from "../../../constants/axios";
import NoImage from "../../../assets/images/noimage.jpg"

function DetailImage(props) {
  return (
    <div className={commonStyles.detailImage}>
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
  );
}

export default DetailImage;
