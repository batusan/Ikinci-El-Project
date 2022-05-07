import cls from "classnames";
import commonStyles from "../../../styles/Common.module.css";
import DetailSpecs from "./DetailSpecs";
import DetailName from "./DetailName";
import DetailImage from "./DetailImage";
import OfferModal from "../../Modal/OfferModal";
import DetailButtons from "./DetailButtons";
import DetailsDescription from "./DetailsDescription";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import DetailOffer from "./DetailOffer";
import Modal from "../../Modal/Modal";
import Router from "next/router";
import { useProductContext } from "../../../contexts/ProductContext";

function Details(props) {
  const { userDetail } = useAuthContext();
  const { buyProduct } = useProductContext();
  const [offerShow, setOfferShow] = useState(false);
  const [show, setShow] = useState(false);
  const [offerPrice, setOfferPrice] = useState();
  const [myOffer, setMyOffer] = useState();

  const handleBuy = async () => {
    await buyProduct(props.product.id, {
      isSold: true,
    }).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

  useEffect(() => {
    if (userDetail) didIOffer();
  }, [userDetail]);

  const didIOffer = () => {
    const data = props.product.offers.find(
      (offer) => offer.users_permissions_user === userDetail.id
    );
    if (data) setMyOffer(data);
  };

  return (
    <>
      <div className={cls("container", commonStyles.detailWrapper)}>
        <DetailImage product={props.product} />
        <div className={commonStyles.detailProduct}>
          <DetailName name={props.product.name} />
          <DetailSpecs product={props.product} />
          <div className={commonStyles.detailProductPrice}>
            {props.product.price} TL
            <DetailOffer myOffer={myOffer} />
          </div>

          <DetailButtons
            myOffer={myOffer}
            setShow={setShow}
            setOfferShow={setOfferShow}
            product={props.product}
          />
          <DetailsDescription description={props.product.description} />
        </div>
      </div>
      <OfferModal
        offerPrice={offerPrice}
        setOfferPrice={setOfferPrice}
        show={offerShow}
        setShow={setOfferShow}
        product={props.product}
      />
      <Modal
        onClick={handleBuy}
        show={show}
        setShow={setShow}
        product={props.product}
      />
    </>
  );
}

export default Details;
