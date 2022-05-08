import Button from "../../Inputs/Button";
import Router from "next/router";
import commonStyles from "@/styles/Common.module.css";
import { useProductContext } from "@/contexts/ProductContext";
import { useUserContext } from "@/contexts/UserContext";

function DetailButtons(props) {
  const { deleteOffer, loading, setLoading } = useProductContext();
  const { userDetail } = useUserContext();

  const handleDelete = async () => {
    setLoading(true);
    await deleteOffer(props.myOffer.id)
      .then((res) => {
        if (res.status === 200) props.setMyOffer();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className={commonStyles.buttonWrapper}>
      {userDetail && (
        <>
          {props.product.isSold ? (
            <Button
              height="45px"
              value="Bu ürün satışta değil"
              className={commonStyles.soldButton}
            />
          ) : (
            <>
              <Button
                height="45px"
                value="Satın Al"
                className={commonStyles.primaryButton}
                onClick={() => props.setShow(true)}
              />
              {props.product.isOfferable && (
                <>
                  {props.myOffer ? (
                    <Button
                      height="45px"
                      value="Teklifi Geri Çek"
                      className={commonStyles.secondaryButton}
                      onClick={handleDelete}
                      disabled={loading}
                    />
                  ) : (
                    <Button
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
        </>
      )}
    </div>
  );
}

export default DetailButtons;
