import Image from "next/image";
import commonStyles from "../../../styles/Common.module.css";
import { baseURL } from "../../../constants/axios";

function DetailImage(props) {
  return (
    <div className={commonStyles.detailImage}>
      <Image
        src={`${baseURL}${props.product.image.url}`}
        alt={props.product.name}
        layout={"fill"}
        priority
      />
    </div>
  );
}

export default DetailImage;
