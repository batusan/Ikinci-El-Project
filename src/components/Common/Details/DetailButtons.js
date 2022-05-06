import Button from "../../Inputs/Button";
import Router from "next/router";
import commonStyles from "../../../styles/Common.module.css";
import { useProductContext } from "../../../contexts/ProductContext";

function DetailButtons(props) {
  const { deleteOffer, buyProduct } = useProductContext();

  const handleDelete = async () => {
    const response = await deleteOffer(props.myOffer.id).then((res) => {
      Router.reload(window.location.pathname);
    });
  };

  return (
    <div className={commonStyles.buttonWrapper}>
      {props.product.isSold ? (
        <Button
          width="235px"
          height="45px"
          value="Bu ürün satışta değil"
          className={commonStyles.soldButton}
        />
      ) : (
        <>
          <Button
            width="235px"
            height="45px"
            value="Satın Al"
            className={commonStyles.primaryButton}
            onClick={() => props.setShow(true)}
          />
          {props.product.isOfferable && (
            <>
              {props.myOffer ? (
                <Button
                  width="235px"
                  height="45px"
                  value="Teklifi Geri Çek"
                  className={commonStyles.secondaryButton}
                  onClick={handleDelete}
                />
              ) : (
                <Button
                  width="235px"
                  height="45px"
                  value="Teklif Ver"
                  className={commonStyles.secondaryButton}
                  onClick={() => props.setOfferShow(true)}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default DetailButtons;
