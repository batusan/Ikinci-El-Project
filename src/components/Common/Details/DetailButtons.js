import Button from "../../Inputs/Button";
import commonStyles from "../../../styles/Common.module.css";

function DetailButtons(props) {
  return (
    <div className={commonStyles.buttonWrapper}>
      <Button
        width="235px"
        height="45px"
        value="Satın Al"
        className={commonStyles.primaryButton}
      />
      {props.product.isOfferable && (
        <Button
          width="235px"
          height="45px"
          value="Teklif Ver"
          className={commonStyles.secondaryButton}
        />
      )}
    </div>
  );
}

export default DetailButtons;
