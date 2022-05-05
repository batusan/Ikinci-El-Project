import cls from "classnames";
import commonStyles from "../../../styles/Common.module.css";
import DetailSpecs from "./DetailSpecs";
import DetailName from "./DetailName";
import DetailImage from "./DetailImage";
import Modal from "../../Modal/Modal";
import DetailButtons from "./DetailButtons";
import DetailsDescription from "./DetailsDescription";
import { useState } from "react";
import DetailOffer from "./DetailOffer";

function Details(props) {
  const [show, setShow] = useState(false);
  const [offerPrice, setOfferPrice] = useState();

  return (
    <>
      <div className={cls("container", commonStyles.detailWrapper)}>
        <DetailImage product={props.product} />
        <div className={commonStyles.detailProduct}>
          <DetailName name={props.product.name} />
          <DetailSpecs product={props.product} />
          <div className={commonStyles.detailProductPrice}>
            {props.product.price} TL
            <DetailOffer offers={props.product.offers} />
          </div>

          <DetailButtons
            show={show}
            setShow={setShow}
            product={props.product}
          />
          <DetailsDescription description={props.product.description} />
        </div>
      </div>
      <Modal
        offerPrice={offerPrice}
        setOfferPrice={setOfferPrice}
        show={show}
        setShow={setShow}
        product={props.product}
      />
    </>
  );
}

export default Details;
