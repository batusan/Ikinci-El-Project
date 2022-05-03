import commonStyles from "../../../styles/Common.module.css";

function DetailSpecs(props) {
  return (
    <>
      <div className={commonStyles.detailProductSpecs}>
        <div className={commonStyles.detailProductLeft}>Marka :</div>
        <div className={commonStyles.detailProductRight}>
          {props.product.brand}
        </div>
      </div>
      <div className={commonStyles.detailProductSpecs}>
        <div className={commonStyles.detailProductLeft}>Renk :</div>
        <div className={commonStyles.detailProductRight}>
          {props.product.color}
        </div>
      </div>
      <div className={commonStyles.detailProductSpecs}>
        <div className={commonStyles.detailProductLeft}>Kullanım Durumu :</div>
        <div className={commonStyles.detailProductRight}>
          {props.product.status}
        </div>
      </div>
    </>
  );
}

export default DetailSpecs;
