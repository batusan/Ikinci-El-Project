import cls from "classnames";
import commonStyles from "../../../styles/Common.module.css";
import DetailSpecs from "./DetailSpecs";
import DetailName from "./DetailName";
import DetailImage from "./DetailImage";
import Modal from "../../Modal/Modal";
import DetailButtons from "./DetailButtons";
import DetailsDescription from "./DetailsDescription";

function Details(props) {
  console.log(props);
  return (
    <>
      <div className={cls("container", commonStyles.detailWrapper)}>
        <DetailImage product={props.product} />
        <div className={commonStyles.detailProduct}>
          <DetailName name={props.product.name} />
          <DetailSpecs product={props.product} />
          <div className={commonStyles.detailProductPrice}>
            {props.product.price} TL
          </div>
          <DetailButtons product={props.product} />
          <DetailsDescription description={props.product.description} />
        </div>
      </div>
      <Modal product={props.product} />
    </>
  );
}

export default Details;
